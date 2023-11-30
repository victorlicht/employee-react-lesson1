import Employee from './components/Employee';
import man from './assets/man.jpeg';
import dog from './assets/dog.webp';
import cat from './assets/photo_2023-11-24_23-12-13.jpg';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import AddEmployee from './components/AddEmployee';
const employeesList = [
  {
    id: 1,
    name: 'Zino',
    role: 'Engineer',
    img : man
  },
  {
    id: 2,
    name: 'El-Boun',
    role: 'Tiger-Lion',
    img : cat
  },
  {
    id: 3,
    name: 'Bolbol',
    role: 'Dog Mechanic',
    img : dog
  }
];

function App() {
  const [employees, setEmployees] = useState(employeesList);

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  function editEmployee(id, newName, newRole) {
      setEmployees(prev =>  prev.map((employee) => {
        if (id === employee.id) {
          return {...employee, name: newName, role: newRole};
        }
        return employee;
      }));
  }

  function addNewEmployee(name, role, img) {
    const addNewEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    };
    setEmployees(prev=>[...prev, addNewEmployee])
  }
  
  return (
    <>
      <div className="App flex flex-wrap justify-center align-middle text-center m-4">
        {employees.map((employee) => {
          return (
            <Employee key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img} editEmployee={editEmployee} />
          );
        })}
      </div>
      <div className='flex justify-center align-middle'>
        <AddEmployee addNewEmployee={addNewEmployee}/>
      </div>
    </>
  );
}

export default App;
