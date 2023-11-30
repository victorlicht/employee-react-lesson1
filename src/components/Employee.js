import EditEmployee from "./EditEmployee";

function Employee(props) {
    return (
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 pt-4 m-2 bg-gray-800">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.img} alt="nono"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-4">{props.role}</span>
                <EditEmployee 
                    id={props.id}
                    name={props.name} 
                    role={props.role} 
                    editEmployee={props.editEmployee}
                />
            </div>
        </div>
    )
}

export default Employee;