import { mySocials } from "../constants/index.js";

function Footer() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space mt-10">
      <div className="flex flex-col items-center mx-auto">
        <div className="relative text-2xl font-bold text-white flex items-center justify-center mb-2">
          <p>Mozammil Tarique</p>
          <span className="bg-[#ef973f] h-2 w-2 rounded-full absolute -right-4 bottom-2" />
        </div>
        <div className="flex gap-2 items-center">
          <img src="mail_icon.png" className="h-4 w-6" />
          <p className="subtext">mozammiltarique007@gmail.com</p>
        </div>
      </div>
      <div className="mb-3 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex flex-col">
        <p className="text-neutral-300 text-sm font-thin">
          © {new Date().getFullYear()} Mozammil Tarique. All rights reservered.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href=""
            className="hover:text-white transition-all cursor-pointer text-sm font-thin"
          >
            Terms & Conditions
          </a>
          <div className="h-5 w-px bg-white/20" />
          <a
            href=""
            className="hover:text-white transition-all cursor-pointer text-sm font-thin"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {mySocials.map((icon, idx) => (
          <>
            <a
              key={idx}
              href={icon.href}
              className="hover:text-white transition-all text-base"
            >
              {icon.name}
            </a>
            {idx < mySocials.length - 1 && (
              <div className="h-5 w-px bg-white/20"></div>
            )}
          </>
        ))}
      </div>
    </section>
  );
}
export default Footer;
