import { useEffect, useState } from "react";
import PlaneCrashCard from "./PlaneCrashCard.jsx";

function PlaneCrashList() {
    const [crashes, setCrashes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/crashes")
            .then(response => response.json())
            .then(data => setCrashes(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Plane Crash Data</h2>
            {crashes.length > 0 ? (
                crashes.map(crash => <PlaneCrashCard key={crash.id} crash={crash} />)
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PlaneCrashList;
