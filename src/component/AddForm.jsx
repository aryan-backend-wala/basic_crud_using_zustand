import { useEffect } from "react";
import { usePersonStore } from "../store/person"

export default function AddForm(){
  const {
    person,
    createPerson,
    addPerson,
    resetPerson,
    personToEdit,
    updatePerson,
    resetPersonToEdit
  } = usePersonStore();

  useEffect(() => {
    if(personToEdit){
      createPerson(personToEdit)
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
          onChange={(e) => createPerson({...person, firstName: e.target.value})}
        />
      </label>
      <br /><br />
      <label>
        Last Name:
        <input 
          type="text"
          placeholder="doe"
          value={person.lastName}
          onChange={(e) => createPerson({...person, lastName: e.target.value})}
        />
      </label>
      <br /><br />
      <label>
        Age:
        <input 
          type="number"
          placeholder="18"
          value={person.age ? person.age : ""}
          onChange={(e) => createPerson({...person, age: parseInt(e.target.value)})}
        />
      </label>
      <br /><br />
      <label>
        Gender: 
        <select 
          value={person.gender}
          onChange={(e) => createPerson({...person, gender: e.target.value})}
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
        resetPerson()
      }}>
        {personToEdit ? "Save Changes" : "Add"}
      </button>
    </>
  )
}