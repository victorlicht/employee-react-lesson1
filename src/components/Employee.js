function Employee(props) {
    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 pt-4 m-2">
            <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.img} alt="nono"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{props.role}</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</a>
                </div>
            </div>
        </div>
    )
}

export default Employee;