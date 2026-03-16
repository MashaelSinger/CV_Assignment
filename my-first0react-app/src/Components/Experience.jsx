import { useState } from "react";

function Experience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
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
        <h2>Experience</h2>
        <p>Company: {company}</p>
        <p>Position: {position}</p>
        <button onClick={editForm}>Edit</button>
      </div>
    );
  }

  return (
    <form style={container} onSubmit={submitForm}>
      <h2>Experience</h2>

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Experience;