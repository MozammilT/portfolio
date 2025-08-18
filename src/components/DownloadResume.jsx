import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function DownloadResume() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "mozammil_tarique_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-1 py-4 w-[10rem] bg-white cursor-pointer text-center text-sm font-extralight rounded-full overflow-hidden ${
        downloaded ? "shadow-[0_0_20px_rgba(37,39,69,0.5)]" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.p
            key="downloaded"
            className="flex items-center justify-center gap-2 text-black"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <img src="/check-line.svg" className="w-5" alt="downloaded-icon" />
            Downloaded
          </motion.p>
        ) : (
          <motion.p
            key="download"
            className="flex items-center justify-center gap-2 text-black"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <img src="/download.svg" className="w-5" alt="download-icon" />
            My Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default DownloadResume;
