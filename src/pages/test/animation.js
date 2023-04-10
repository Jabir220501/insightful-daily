import { motion } from "framer-motion";

const Curtain = () => {
  return (
    <div className="curtain flex h-screen w-screen">
      <motion.div
        className="block left h-full w-full"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        style={{ backgroundColor: "rgb(255 192 23)" }}
      />
      <motion.div
        className="block right h-full w-full"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        style={{ backgroundColor: "rgb(255 192 23)" }}
      />
      aa
    </div>
  );
};

export default Curtain;
