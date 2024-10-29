import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [link, setLink] = useState(""); // Updated state name for clarity
  const [organizer, setOrganizer] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [notes, setNotes] = useState("");
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
          time: eventTime,
          location: eventLocation,
          related_link: link,
          organizer,
          contact_details: contactDetails,
          description: eventDescription,
          notes,
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
      <form onSubmit={handleSubmit} className="bg-base-200 p-6 rounded-lg shadow-md space-y-4">
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
          <label className="block mb-1 font-medium">Event Time</label>
          <input
            type="time"
            className="input input-bordered w-full"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />
        </div> {/* Fixed unclosed div here */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Related Link</label>
          <input
            type="url"
            className="input input-bordered w-full"
            value={link}
            onChange={(e) => setLink(e.target.value)} // Fixed state function here
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Organizer</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Contact Details</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
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
        <div>
          <label className="block mb-1 font-medium">Notes (optional)</label>
          <textarea
            className="textarea textarea-bordered w-full"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
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

