
import PlaneCrashList from "./components/PlaneCrashList.jsx";

function LandingPage() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Welcome to the ASAP Project</h1>
            <p>This is the landing page for our ASAP idea.</p>
            <PlaneCrashList />
        </div>
    );
}

export default LandingPage;
