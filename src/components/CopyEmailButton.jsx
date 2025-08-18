import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "mozammiltarique007@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-1 py-4 w-[12rem] bg-primary cursor-pointer text-center text-sm font-extralight rounded-full overflow-hidden ${
        copied ? "shadow-[0_0_20px_rgba(37,39,69,0.5)]" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <img src="/copy-done.svg" className="w-5" alt="copied-icon" />
            Email copied!
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <img src="/copy.svg" className="w-5" alt="copy-icon" />
            Copy Email
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default CopyEmailButton;
