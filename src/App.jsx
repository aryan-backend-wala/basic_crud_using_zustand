import { useState } from "react";
import { usePersonStore } from "./store/person";

export default function App(){
  const [editId, setEditId] = useState(null);
  const {
    person, 
    createPerson,
    resetPerson,
    addPerson,
    people,
    deletePerson,
    updatePerson
  } = usePersonStore();
  function handleAdd(){
    if(editId !== null){
      updatePerson(editId, {firstName: person.firstName, lastName: person.lastName})
      setEditId(null)
    } else {
      addPerson(person)
    }
    resetPerson();
  }
  function handleEdit(id){
    const updatedPersons = people.find(p => p.id === id);
    if(updatedPersons){
      createPerson(updatedPersons)
      setEditId(id)
    }
  }
  console.log(people)
  return (
    <div>
      <label>
        First Name:
        <input 
          placeholder="Joe"
          value={person.firstName}
          onChange={(e) => createPerson({firstName: e.target.value})}
        />
      </label>
      <br />
      <br />
      <label>
        Last Name:
        <input 
          placeholder="Joe"
          value={person.lastName}
          onChange={(e) => createPerson({lastName: e.target.value})}
        />
      </label>
      <br />
      <br />
      <button onClick={handleAdd}>{editId !== null ? "Save" : "Add"}</button>
      <button onClick={resetPerson}>Reset</button>
      <h3>People's List: </h3>
      <ul>
        {people.map(person => <li key={person.id}>
          {person.firstName} {person.lastName}
          <button onClick={() => deletePerson(person.id)}>Delete</button>
          <button onClick={() => handleEdit(person.id)}>Edit</button>
        </li>)}
      </ul>
    </div>
  );
}