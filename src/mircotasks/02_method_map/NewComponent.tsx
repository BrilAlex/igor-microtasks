type StudentType = {
  id: number
  name: string
  age: number
};

type NewComponentPropsType = {
  students: Array<StudentType>
};

export const NewComponent = (props: NewComponentPropsType) => {
  const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ];

  return (
    <>
      <ul>
        {props.students.map(s => <li key={s.id}>Name: {s.name} (age: {s.age})</li>)}
      </ul>
      <table>
        <tbody>
        {topCars.map((car, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}. {car.manufacturer} {car.model}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
};