/* eslint-disable react/prop-types */
import React, { useState } from "react";

function CreateEventForm({ onSubmit, error }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [link, setLink] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      eventName,
      eventDate,
      eventTime,
      eventLocation,
      link,
      organizer,
      contactDetails,
      eventDescription,
      notes,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-base-200 p-6 rounded-lg shadow-md space-y-4">
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
      </div>
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
          onChange={(e) => setLink(e.target.value)}
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
      <button type="submit" className="btn btn-primary text-white w-full">
        Create Event
      </button>
    </form>
  );
}

export default CreateEventForm;
