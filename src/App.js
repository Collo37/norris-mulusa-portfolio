import Contact from "components/Contact";
import Footer from "components/Footer";
import Home from "components/Home";
import Portfolio from "components/Portfolio";
import ScrollToTop from "components/ScrollToTop";
import Services from "components/Services";
import Testimonials from "components/Testimonials";
import Video from "components/Video";
import History from "components/History";

import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Home />
      <Services />
      <History />
      <Portfolio />
      <Video />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
}
