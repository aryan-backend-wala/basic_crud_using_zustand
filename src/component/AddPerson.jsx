import { useEffect, useState } from "react";

export default function AddPerson({onAddPerson, updatePerson}){
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    id: 0
  })

  useEffect(() => {
    if(updatePerson){
      setPerson({
        ...updatePerson,
        firstName: updatePerson.firstName,
        lastName: updatePerson.lastName
      })
    } else {
      setPerson({
        id: 0,
        firstName: "",
        lastName: ""
      })
    }
  }, [updatePerson])
  return (
    <>
      <label>
        First Name:
        <input 
          placeholder="joe"
          value={person.firstName}
          onChange={(e) => setPerson({...person, firstName: e.target.value})}
        />
      </label>
      <br />
      <br />
      <label>
        Last Name:
        <input 
          placeholder="doe"
          value={person.lastName}
          onChange={(e) => setPerson({...person, lastName: e.target.value})}
        />
      </label>
      <br />
      <br />
      <button onClick={() => {
        onAddPerson(person);
        person.id += 1;
        setPerson({
          ...person,
          firstName: "",
          lastName: "",
        })
      }}>
        {updatePerson ? "Save" : "Add"}
      </button>
    </>
  );
}