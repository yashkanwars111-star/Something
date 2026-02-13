import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AmbientAudio from "../audio/AmbientAudio";

export default function RootLayout() {
  const location = useLocation();
  const isIntro = location.pathname === "/";

  return (
    <div className="h-screen w-screen overflow-hidden">

      {!isIntro && <AmbientAudio />}

      <AnimatePresence mode="wait">
         <motion.div
        key={location.pathname}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="h-full"
      >
          <Outlet />
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
