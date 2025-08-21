import Homepage from "./pages/Homepage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
