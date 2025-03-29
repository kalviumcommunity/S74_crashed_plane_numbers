import { useEffect, useState } from "react";
import PlaneCrashCard from "./PlaneCrashCard.jsx";

function PlaneCrashList() {
    const [crashes, setCrashes] = useState([]);
    const [createdByList, setCreatedByList] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    const fetchCrashes = () => {
        fetch("http://localhost:3000/api/crashes")
            .then(response => response.json())
            .then(data => {
                setCrashes(data);

                // Extract unique 'created_by' values and remove duplicates
                const uniqueUsers = [...new Set(data.map(crash => crash.created_by))].filter(Boolean);
                setCreatedByList(uniqueUsers);
            })
            .catch(error => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        fetchCrashes();
    }, []);

    // Filter crashes based on selected user
    const filteredCrashes = selectedUser
        ? crashes.filter(crash => crash.created_by === selectedUser)
        : crashes;

    return (
        <div>
            <h2>Plane Crash Data</h2>

            {/* Dropdown for filtering by Created By */}
            <label>Select User:</label>
            <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
                <option value="">All</option>
                {createdByList.map(user => (
                    <option key={user} value={user}>{user}</option>
                ))}
            </select>

            {/* Display Plane Crashes */}
            {filteredCrashes.length > 0 ? (
                filteredCrashes.map(crash => <PlaneCrashCard key={crash._id} crash={crash} refreshData={fetchCrashes} />)
            ) : (
                <p>No crashes found.</p>
            )}
        </div>
    );
}

export default PlaneCrashList;
