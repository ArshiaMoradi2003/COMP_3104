import React, { useState } from "react";
import "./App.css";

export default function App() {
    // ✅ Put YOUR real details here
    const STUDENT_ID = "101490287";
    const STUDENT_NAME = "Arshia Moradi";

    const [form, setForm] = useState({ name: "", age: "", major: "" });
    const [students, setStudents] = useState([]);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const addStudent = (e) => {
        e.preventDefault();
        if (!form.name || !form.age || !form.major) return;
        setStudents((prev) => [...prev, form]);
        setForm({ name: "", age: "", major: "" });
    };

    return (
        <div className="page">
            <div className="card">
                <h1 className="title">Student Information System</h1>

                <p className="byline">
                    Developed By: <strong>{STUDENT_ID}</strong> ||{" "}
                    <strong>{STUDENT_NAME}</strong> || <strong>DevOps</strong>
                </p>

                <form className="form" onSubmit={addStudent}>
                    <label>
                        <span>Name:</span>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                        />
                    </label>

                    <label>
                        <span>Age:</span>
                        <input
                            name="age"
                            type="number"
                            value={form.age}
                            onChange={handleChange}
                            placeholder="e.g., 21"
                        />
                    </label>

                    <label>
                        <span>Major:</span>
                        <input
                            name="major"
                            value={form.major}
                            onChange={handleChange}
                            placeholder="e.g., Computer Science"
                        />
                    </label>

                    <button type="submit" className="btn">Add Student</button>
                </form>

                <h2 className="listTitle">Student List</h2>

                {students.length === 0 ? (
                    <p className="empty">No students added yet</p>
                ) : (
                    <ul className="list">
                        {students.map((s, i) => (
                            <li key={i}>
                                <strong>{s.name}</strong> — {s.age}, {s.major}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
