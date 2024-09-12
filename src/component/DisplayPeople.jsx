import { usePersonStore } from "../store/person";
import { isAdult, captializeFirstLetter } from "../utils/functions";

export default function DisplayPeople(){
  const {
    people,
    deletePerson,
    getId,
  } =  usePersonStore();

  console.log(people)

  return <ul>
    {
      people.map(person => 
        <li key={person.id}>
          Gender: {isAdult(person.gender, person.age > 18) + "=> " + captializeFirstLetter(person.gender)}
          <br />
          Name: {captializeFirstLetter(person.firstName)} {captializeFirstLetter(person.lastName)}
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