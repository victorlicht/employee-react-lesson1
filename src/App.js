import { useState } from 'react';
import Employee from './components/Employee';
function App() {

  const [role, setRole] = useState();
  const showEmployees = true;
  return (
    <div className="App" class="text-center m-4">
      <header className="App-header">
        {showEmployees ? (
          <>
            <input class="border-2 border-solid border-black bg" type="text" onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
            />
            <Employee name="Zino" role="Engineer"/>
            <Employee name="Chihab" role={role}/>
        
          </>
        ) : (
          <p>You cannot see the employees</p>
        )}
      </header>
    </div>
  );
}

export default App;
