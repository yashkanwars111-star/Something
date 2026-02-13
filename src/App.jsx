import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import RootLayout from "./layout/RootLayout";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Art from "./pages/Art";
import DanceCinema from "./pages/DanceCinema";
import Final from "./pages/Final";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="h-full"
      >
        <Routes location={location}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/art" element={<Art />} />
            <Route path="/dance" element={<DanceCinema />} />
            <Route path="/final" element={<Final />} />



          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
