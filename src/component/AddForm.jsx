import { useEffect, useState } from "react";

export default function AddForm({onAddPerson, updatePerson}){
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