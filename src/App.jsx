import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Careers from "./pages/Careers";
import AppDeveloperKerala from "./components/AppDeveloperKerala";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route   path="/app-developer-kerala"   element={<AppDeveloperKerala />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
