import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Welcome to the ASAP Project</h1>
            <p>This is the landing page for our ASAP idea.</p>
            <button onClick={() => navigate("/crashes")}>Get Info</button>
            <button onClick={() => navigate("/add-crash")} style={{ marginLeft: "10px" }}>
                Add Data
            </button>
        </div>
    );
}

export default LandingPage;
