import Employee from './components/Employee';
import man from './assets/man.jpeg'
import dog from './assets/dog.webp'
import cat from './assets/photo_2023-11-24_23-12-13.jpg'
import { useState } from 'react';
function App() {
  const [employees, setEmployees] = useState(
    [
      {
        name: 'Zino',
        role: 'Engineer',
        img : man
      },
      {
        name: 'El-Boun',
        role: 'Tiger-Lion',
        img : cat
      },
      {
        name: 'Bolbol',
        role: 'Dog Mechanic',
        img : dog
      }
    ]
  );
  return (
    <div className="App flex flex-wrap justify-center align-middle text-center m-4">
      {employees.map((employee) => {
        return (
          <Employee name={employee.name} role={employee.role} img={employee.img} />
        );
      })}
    </div>
  );
}

export default App;
