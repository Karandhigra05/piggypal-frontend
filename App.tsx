import { useState } from "react";

function App() {
  const [child, setChild] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(import.meta.env.VITE_API_URL + "/api/children", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name: child, age: Number(age) }),
    });
    const data = await res.json();
    alert("Child Added: " + data.name);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>PiggyPal - Add Child</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Child Name"
          value={child}
          onChange={(e) => setChild(e.target.value)}
        /><br/>
        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br/>
        <button type="submit">Add Child</button>
      </form>
    </div>
  );
}

export default App;