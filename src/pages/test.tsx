
// Ejemplo de animación con framer-motion
// import { m, motion } from "framer-motion";

import { motion } from "framer-motion";

const Test = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      transition={{
        repeat: Infinity,
        duration: 4,
        repeatType: "reverse",
        
      }}
      style={ball}
      >
      </motion.div>
    </div>
  );
}

export default Test;

//styles
const ball = {
  margin: "auto",
  width: 100,
  height: 100,
  border: "2px solid blue",
  borderRadius: "50%",
};