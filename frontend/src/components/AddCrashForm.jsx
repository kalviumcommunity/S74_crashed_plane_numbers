import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCrashForm() {
    const [formData, setFormData] = useState({ title: "", year: "", location: "", summary: "", created_by: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Sending Data:", formData); // ✅ Debug: Check data before sending

        const response = await fetch("http://localhost:3000/api/crashes", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // ✅ Ensure JSON format
            body: JSON.stringify({
                ...formData,
                year: Number(formData.year) // ✅ Convert year to Number
            }),
        });

        if (response.ok) {
            alert("Data added successfully!");
            navigate("/crashes");
        } else {
            const errorData = await response.json();
            alert("Error adding data: " + errorData.error);
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
                <input type="text" name="created_by" placeholder="Created By " onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddCrashForm;
