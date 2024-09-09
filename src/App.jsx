import { useState } from "react";
import { usePersonStore } from "./store/person";

export default function App(){
  const [editId, setEditId] = useState(null)
  const {
    person,
    createPerson,
    resetPerson,
    addPerson,
    people,
    deletePerson,
    updatePerson
  } = usePersonStore();
  function handleAddPerson(){
    if(editId !== null){
      updatePerson(editId, {firstName: person.firstName, lastName: person.lastName})
      setEditId(null);
    } else {
      addPerson(person)
    }
    resetPerson();
  }
  function handleEditPerson(id){
    const personToEdit = people.find(person => person.id === id)
    if(personToEdit){
      createPerson(personToEdit)
      setEditId(id);
    }
  }
  return (
    <div>
      <label>
        First Name: 
        <input 
          placeholder="joe"
          value={person.firstName}
          onChange={(e) => createPerson({firstName: e.target.value})}
        />
      </label>
      <br />
      <br />
      <label>
        Last Name: 
        <input 
          placeholder="doe"
          value={person.lastName}
          onChange={(e) => createPerson({lastName: e.target.value})}
        />
      </label>
      <br />
      <br />
      <button onClick={handleAddPerson}>{editId !== null ? "Save" : "Add"}</button>
      <button onClick={resetPerson}>Reset</button>
      <h3>People's List:</h3>
      <ul>
        {people.map(person => <li key={person.id}>
          {person.firstName} {person.lastName}
          <button onClick={() => handleEditPerson(person.id)}>Edit</button>
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  );
}