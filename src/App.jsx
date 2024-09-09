import React, { useState } from "react";
import { usePersonStore } from "./store/person";

export default function App() {
  const { person, people, createPerson, addPerson, updatePerson, resetPerson, deletePerson } = usePersonStore();
  const [editId, setEditId] = useState(null);

  const handleSave = () => {
    if (editId !== null) {
      updatePerson(editId, { firstName: person.firstName, lastName: person.lastName });
      setEditId(null); 
    } else {
      addPerson(person);
    }
    resetPerson(); 
  };

  const handleEdit = (id) => {
    const personToEdit = people.find((p) => p.id === id);
    if (personToEdit) {
      createPerson(personToEdit);
      setEditId(id); 
    }
  };

  return (
    <main>
      <label>
        First Name: {" "}
        <input
          placeholder="Jane"
          value={person.firstName}
          onChange={(e) => createPerson({ firstName: e.target.value })}
        />
      </label>
      <br /><br />
      <label>
        Last Name: {" "}
        <input
          placeholder="Doe"
          value={person.lastName}
          onChange={(e) => createPerson({ lastName: e.target.value })}
        />
      </label>
      <br /><br />
      
      <button onClick={handleSave}>
        {editId !== null ? "Save Changes" : "Add Person"}
      </button>
      <button onClick={resetPerson}>Reset</button>

      <h3>People List:</h3>
      <ul>
        {people.map((p) => (
          <li key={p.id}>
            {p.id}. {p.firstName} {p.lastName} {" "}
            <button onClick={() => handleEdit(p.id)}>Edit</button>
            <button onClick={() => deletePerson(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
