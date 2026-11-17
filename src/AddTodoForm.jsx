import { useState } from "react";

export default function AddTodoForm({ onAdd }) {

  // AI-assisted — see AI-USAGE.md #1
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      onAdd(trimmedText);
      setText("");
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input name="text" placeholder="Add a todo…" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}