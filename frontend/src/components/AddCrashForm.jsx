import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCrashForm() {
    const [formData, setFormData] = useState({ title: "", year: "", location: "", summary: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/crashes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Data added successfully!");
            navigate("/crashes");
        } else {
            alert("Error adding data.");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Add Plane Crash Data</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
                <input type="number" name="year" placeholder="Year" onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
                <textarea name="summary" placeholder="Summary" onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddCrashForm;
