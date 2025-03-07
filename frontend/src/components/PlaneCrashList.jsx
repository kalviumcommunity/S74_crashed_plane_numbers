
import PlaneCrashCard from "./PlaneCrashCard.jsx";

const sampleCrashes = [
    { id: 1, title: "Flight 123 Crash", year: 1999, location: "New York, USA", summary: "A tragic crash due to engine failure." },
    { id: 2, title: "Airline X Disaster", year: 2005, location: "Tokyo, Japan", summary: "Severe turbulence caused loss of control." }
];

function PlaneCrashList() {
    return (
        <div>
            <h2>Plane Crash Data</h2>
            {sampleCrashes.map(crash => (
                <PlaneCrashCard key={crash.id} crash={crash} />
            ))}
        </div>
    );
}

export default PlaneCrashList;
