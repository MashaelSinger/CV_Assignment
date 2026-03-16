import { useState } from "react";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const box = {
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
      <div style={box}>
        <h2>General Information</h2>

        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>

        <button onClick={editForm}>Edit</button>
      </div>
    );
  }

  return (
    <form style={box} onSubmit={submitForm}>
      <h2>General Information</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default GeneralInfo;