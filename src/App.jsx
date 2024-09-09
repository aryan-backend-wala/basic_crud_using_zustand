import { useState } from "react";
import AddPerson from "./component/AddPerson";

export default function App(){
  const [people, setPeople] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(null);
  function handleAddPerson(person){
    if(currentPerson){
      setPeople(
        people.map(p =>
          p.id === currentPerson.id ? 
            {...p, ...person} : p
        )
      )
      setCurrentPerson(null);
    } else {
      setPeople([...people, person])
    }
  }
  function handleDelelePerson(id){
    setPeople(people.filter(person => person.id !== id))
  }
  function handleEditPerson(id){
    const personToEdit = people.find(person => person.id === id);
    if(personToEdit){
      setCurrentPerson(personToEdit)
    }
  }
  console.log(people)
  return (
    <div>
      <AddPerson 
        onAddPerson={handleAddPerson} 
        updatePerson={currentPerson}
      />
      <br />
      <br />
      
      <button>Reset</button>
      <h3>People's List:</h3>
      <ul>
        {people.map(person => 
          <li key={person.id}>
            {person.firstName} {person.lastName}
            <button onClick={() => handleEditPerson(person.id)}>Edit</button>
            <button onClick={() => handleDelelePerson(person.id)}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
}