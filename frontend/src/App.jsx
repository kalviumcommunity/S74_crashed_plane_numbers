import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PlaneCrashList from "./components/PlaneCrashList";
import AddCrashForm from "./components/AddCrashForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/crashes" element={<PlaneCrashList />} />
                <Route path="/add-crash" element={<AddCrashForm />} />
            </Routes>
        </Router>
    );
}

export default App;
