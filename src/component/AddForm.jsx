import { useEffect, useState } from "react";
import { usePersonStore } from "../store/person"

export default function AddForm(){
  const [person, setPerson] =useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: 0,
    id: 0
  })
  const {
    addPerson,
    personToEdit,
    updatePerson,
    resetPersonToEdit
  } = usePersonStore();

  useEffect(() => {
    if(personToEdit){
      setPerson(personToEdit)
    }
  }, [personToEdit])
  
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
      <button onClick={() => {
        if(personToEdit){
          updatePerson(personToEdit.id, person)
          resetPersonToEdit()
        } else {
          addPerson(person)
        }
        setPerson({
          ...person,
          firstName: "",
          lastName: "",
          gender: "",
          age: 0
        })
      }}>
        {personToEdit ? "Save Changes" : "Add"}
      </button>
    </>
  )
}