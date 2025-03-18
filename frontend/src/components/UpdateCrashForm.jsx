import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCrashForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: "", year: "", location: "", summary: "" });

    useEffect(() => {
        fetch(`http://localhost:3000/api/crashes/${id}`)
            .then((res) => res.json())
            .then((data) => setFormData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/api/crashes/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Crash data updated successfully!");
            navigate("/crashes");
        } else {
            alert("Error updating data.");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Update Plane Crash Data</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                <input type="number" name="year" value={formData.year} onChange={handleChange} required />
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                <textarea name="summary" value={formData.summary} onChange={handleChange} required />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateCrashForm;
