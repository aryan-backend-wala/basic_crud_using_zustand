import { useEffect, useState } from "react";
import { initialPeople } from './utils/initialPeople'

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

function AddForm({onAddPerson, updatePerson}){
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    id: 3
  });
  useEffect(() => {
    if(updatePerson){
      setPerson({
        ...updatePerson
      })
    } else {
      setPerson({
        ...person
      })
    }
  }, [updatePerson])

  function handleCreatePerson(){
    onAddPerson(person);
    person.id += 1;
    setPerson({
      ...person,
      firstName: "",
      lastName: "",
      age: 0
    })
  }

  return (
    <>
      <label>
        First Name:
        <input 
          type="text"
          placeholder="jane"
          value={person.firstName}
          onChange={(e) => setPerson({...person, firstName: e.target.value})}
        />
      </label>
      <br /><br />
      <label>
        Last Name:
        <input 
          type="text"
          placeholder="doe"
          value={person.lastName}
          onChange={(e) => setPerson({...person, lastName: e.target.value})}
        />
      </label>
      <br /><br />
      <label>
        Age:
        <input 
          type="number"
          placeholder="18"
          value={person.age ? person.age : ""}
          onChange={(e) => setPerson({...person, age: parseInt(e.target.value)})}
        />
      </label>
      <br /><br />
      <label>
        Gender: 
        <select 
          value={person.gender}
          onChange={(e) => setPerson({...person, gender: e.target.value})}
        >
          <option value="">Choose</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br /><br />
      <button onClick={handleCreatePerson}>
        {updatePerson ? 'Save Changes' : "Add"}
      </button>
    </>
  )
}

function DisplayPeople({people, onDeletePerson, onEditPerson}){
  const sortedPeople = [...people];
  sortedPeople.sort((a, b) => a.age > b.age ? -1 : 1);
  // const p = ['👦', '👨']
  function isAdult(person){
    switch(person.gender){
      case 'male':
        return '👨'
      case 'female':
        return '👩'
    }
  }
  function isChild(person){
    switch(person.gender){
      case 'male':
        return '👦'
      case 'female':
        return '👧'
    }
  }
  return <ul>
    {people.map(person => <li key={person.id}>
      Gender: {person.age < 18 ? isChild(person) : isAdult(person)}
      <br />
      Name: {person.firstName} {person.lastName}
      <br />
      Age: {person.age}
      <br/>
      <button onClick={() => onDeletePerson(person.id)}>Delete</button>
      <button onClick={() => onEditPerson(person.id)}>Edit</button>
    </li>)}
  </ul>;
}