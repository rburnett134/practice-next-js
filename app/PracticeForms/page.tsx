"use client";

import { useState, SubmitEvent } from "react";

type formType = {
  name: string,
  email: string
}

export default function PracticeForms() {
  const [formData, setFormData] = useState<formType>({
    name: "",
    email: ""
  });
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if(formData.name === "" || formData.email === "") {
      setError("Name and email are required");
    } else {
      setError("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        onChange={(e) => setFormData({
          ...formData,
          name: e.target.value
        })}
      />
      <label>Email:</label>
      <input
        onChange={(e) => setFormData({
          ...formData,
          email: e.target.value
        })}
      />
      <button>Submit</button>
      {error && <p>{error}</p>}
    </form>
  )
}