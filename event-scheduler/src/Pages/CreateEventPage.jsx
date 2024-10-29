import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiToken = localStorage.getItem("apiToken");

    if (!apiToken) {
      setError("You must have a valid API token to create an event.");
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          name: eventName,
          date: eventDate,
          description: eventDescription,
        }),
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
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Event Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Event Date</label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="textarea textarea-bordered w-full"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEventPage;
