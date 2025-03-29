import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function PlaneCrashCard({ crash, refreshData }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            const response = await fetch(`http://localhost:3000/api/crashes/${crash._id}`, { method: "DELETE" });
            if (response.ok) {
                alert("Crash deleted successfully!");
                refreshData(); // Refresh the list after deletion
            } else {
                alert("Error deleting crash.");
            }
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <h3>{crash.title} ({crash.year})</h3>
            <p><strong>Location:</strong> {crash.location}</p>
            <p><strong>Summary:</strong> {crash.summary}</p>
            <p><strong>Created By:</strong> {crash.created_by}</p> {/* ✅ FIXED */}
            <button onClick={() => navigate(`/update-crash/${crash._id}`)}>Update</button>
            <button onClick={handleDelete} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>
                Delete
            </button>
        </div>
    );
}

PlaneCrashCard.propTypes = {
    crash: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        created_by: PropTypes.string, // ✅ Added this to PropTypes
    }).isRequired,
    refreshData: PropTypes.func.isRequired,
};

export default PlaneCrashCard;
