import { motion, useScroll, useTransform, useSpring } from "motion/react";

function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { damping: 20 });
  const mountain3Y = useTransform(spring, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(spring, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(spring, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(spring, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div className="absolute inset-0 w-full h-screen -z-50 bg-[url(/sky.jpg)] bg-bottom bg-cover" />

        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40 bg-[url(/mountain-3.png)] bg-bottom bg-cover"
          style={{ y: mountain3Y }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30 bg-[url(/planets.png)] bg-bottom bg-cover"
          style={{ y: planetsX }}
        />

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20 bg-[url(/mountain-2.png)] bg-bottom bg-cover"
          style={{ y: mountain2Y }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10 bg-[url(/mountain-1.png)] bg-bottom bg-cover"
          style={{ y: mountain1Y }}
        />
      </div>
    </section>
  );
}

export default ParallaxBackground;
