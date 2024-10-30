import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateEventForm from "../components/CreateEventForm";

function CreateEventPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const apiToken = localStorage.getItem("apiToken");

    // If no token, show alert and redirect to sign in page
    //if (!apiToken) {
      //alert("You need to sign in first to create an event.");
     // navigate("/signin");
   // }
  }, [navigate]);

  const handleSubmit = async (formData) => {
    const apiToken = localStorage.getItem("apiToken");

    if (!apiToken) {
      alert("You must sign in to create an event."); // Alert before redirecting
      navigate("/signin");
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/events"); // Redirect to events list on success
      } else {
        setError("Failed to create event. Please check your input and try again.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <CreateEventForm onSubmit={handleSubmit} error={error} />
    </div>
  );
}

export default CreateEventPage;

