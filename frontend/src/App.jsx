import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PlaneCrashList from "./components/PlaneCrashList";
import AddCrashForm from "./components/AddCrashForm";
import UpdateCrashForm from "./components/UpdateCrashForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/crashes" element={<PlaneCrashList />} />
                <Route path="/add-crash" element={<AddCrashForm />} />
                <Route path="/update-crash/:id" element={<UpdateCrashForm />} />
            </Routes>
        </Router>
    );
}

export default App;
