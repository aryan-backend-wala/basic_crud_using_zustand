import { usePersonStore } from "./store/person";

export default function App(){
  const {createPerson, people, addPerson, resetPerson} = usePersonStore();
  const firstName = usePersonStore((state) => state.person.firstName);
  const lastName = usePersonStore((state) => state.person.lastName);
  console.log(people);
  return (
    <main>
      <label>
        First Name: {" "}
        <input 
          placeholder="jane"
          value={firstName}
          onChange={(e) => createPerson({firstName: e.target.value})}
        />
      </label>
      <br />
      <br />
      <label>
        Last Name: {" "}
        <input 
          placeholder="doe"
          value={lastName}
          onChange={(e) => createPerson({lastName: e.target.value})}
        />
      </label>
      <br />
      <br />
      <button onClick={() => {
        addPerson({firstName, lastName})
        resetPerson()
      }}>Add</button>
      <p>
        Hello, <strong>{firstName} {lastName}!</strong>
      </p>
      <ul>
        {people.map((person, index) => <li key={index}>
          {person.firstName} {person.lastName}
        </li>)}
      </ul>
    </main>
  );
}