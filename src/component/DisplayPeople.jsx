export default function DisplayPeople({people, onDeletePerson, onEditPerson}){
  const sortedPeople = [...people];
  sortedPeople.sort((a, b) => a.age > b.age ? -1 : 1);
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