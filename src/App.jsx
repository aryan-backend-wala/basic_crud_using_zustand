import { useState } from "react";
import { initialPeople } from './utils/initialPeople'
import AddForm from "./component/AddForm";
import DisplayPeople from "./component/DisplayPeople";

export default function App(){
  const [people, setPeople] = useState(initialPeople);
  const [currentPerson, setCurrentPerson] = useState(null)
  
  function handleAddPerson(person){
    if(currentPerson){
      setPeople(people =>
        people.map(p => 
          p.id === currentPerson.id ? 
            {...p, ...person} : p
        )
      )
      setCurrentPerson(null);
    } else {
      setPeople(prevPerson => {
        return [...prevPerson, person];
      })
    }
  }

  function handleDeletePerson(id){
    setPeople(prevData => 
      prevData.filter(person => 
        person.id !== id
      )
    )
  }

  function handleEditPerson(id){
    const personToEdit = people.find(person => person.id === id)
    setCurrentPerson(personToEdit);
  }

  console.log(people);

  return (
    <div>
      <AddForm 
        onAddPerson={handleAddPerson}
        updatePerson={currentPerson}
      />
      <DisplayPeople 
        people={people} 
        onDeletePerson={handleDeletePerson}
        onEditPerson={handleEditPerson}
      />
    </div>
  );
}