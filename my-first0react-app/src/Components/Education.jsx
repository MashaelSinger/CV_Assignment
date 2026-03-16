import { useState } from "react";

function Education() {
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const container = {
    border: "1px solid gray",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px"
  };

  function submitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function editForm() {
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div style={container}>
        <h2>Education</h2>
        <p>School: {school}</p>
        <p>Your Study: {study}</p>
        <p>Date: {date}</p>
        <button onClick={editForm}>Edit</button>
      </div>
    );
  }

  return (
    <form style={container} onSubmit={submitForm}>
      <h2>Education</h2>

      <input
        type="text"
        placeholder="School Name"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
    
      />
      <br />

      <input
        type="text"
        placeholder="Your Study"
        value={study}
        onChange={(e) => setStudy(e.target.value)}
       
      />
      <br />

      <input
        type="text"
        placeholder="Date of Study"
        value={date}
        onChange={(e) => setDate(e.target.value)}
       
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Education;