import PropTypes from "prop-types";

function PlaneCrashCard({ crash }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <h3>{crash.title} ({crash.year})</h3>
            <p><strong>Location:</strong> {crash.location}</p>
            <p><strong>Summary:</strong> {crash.summary}</p>
        </div>
    );
}

// ✅ Fix: Define PropTypes here
PlaneCrashCard.propTypes = {
    crash: PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
    }).isRequired,
};

export default PlaneCrashCard;
