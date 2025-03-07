
import PropTypes from "prop-types"; // Import prop-types

function PlaneCrashCard({ crash }) {
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h3>{crash.title}</h3>
            <p><strong>Year:</strong> {crash.year}</p>
            <p><strong>Location:</strong> {crash.location}</p>
            <p><strong>Summary:</strong> {crash.summary}</p>
        </div>
    );
}

// ✅ Add PropTypes validation
PlaneCrashCard.propTypes = {
    crash: PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
    }).isRequired,
};

export default PlaneCrashCard;
