import { usePersonStore } from "../store/person";

export default function DisplayPeople(){
  const {
    people,
    deletePerson,
    getId,
  } =  usePersonStore();
  
  return <ul>
    {
      people.map(person => 
        <li key={person.id}>
          Gender: {isAdult(person.gender) + "=> " + person.gender}
          <br />
          Name: {person.firstName} {person.lastName}
          <br />
          Age: {person.age}
          <br />
          <button onClick={() => getId(person.id)}>Edit</button>
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </li>
      )
    }
  </ul>;
}

function isAdult(string){
  switch(string){
    case 'male':
      return '👨'
    case 'female':
      return '👩'
    default: 
      return ""
  }
}