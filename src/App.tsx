import { Stack } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ValuesSection from "./components/ValuesSection";
import "./App.css";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Stack gap={3} className="align-items-center">
        <NavBar />
        <Banner />
        <i
          className="bi bi-chevron-compact-down"
          style={{ fontSize: "4rem", color: "#20204B" }}
        ></i>
        <ValuesSection />
      </Stack>
    </motion.div>
  );
}

export default App;
