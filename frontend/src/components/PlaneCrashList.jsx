import { useEffect, useState } from "react";
import PlaneCrashCard from "./PlaneCrashCard.jsx";

function PlaneCrashList() {
    const [crashes, setCrashes] = useState([]);

    const fetchCrashes = () => {
        fetch("http://localhost:3000/api/crashes")
            .then(response => response.json())
            .then(data => setCrashes(data))
            .catch(error => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        fetchCrashes();
    }, []);

    return (
        <div>
            <h2>Plane Crash Data</h2>
            {crashes.length > 0 ? (
                crashes.map(crash => <PlaneCrashCard key={crash._id} crash={crash} />)
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PlaneCrashList;
