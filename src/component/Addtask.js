import React, { useState } from "react";


const AddTask = () => {
    const [enterNewTask, setNewTask] = useState ('');
    const [taskDetail, setTaskDetail] = useState ('');
    const [taskList, setTaskList] = useState([]);

    
    function addInput() {
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            value: enterNewTask,
            detail: taskDetail,
        };

        setTaskList([...taskList, newTask]);
        
        if (!enterNewTask || !taskDetail) {
            alert("The input field is empty")
            return;
        };
        setNewTask('');
        setTaskDetail('');
        console.log(newTask.id)
    };

    const deleteTask = (id) => {
        setTaskList(taskList => {
            return taskList.filter((newTask) => newTask.id !== id);
        });
        console.log(id);
    };


    return ( 
        <div className="">
            <div className=" mt-1 flex flex-row items-center justify-center font-sans">
                <div className=" px-4 py-2">
                    <input className="px-2 border bg-gray-50 border-slate-400 rounded-md shadow-sm placeholder-slate-600 text-gray-900" type="text" placeholder="Input Task Title" value={enterNewTask} onChange={e => setNewTask(e.target.value)}/>
                </div>
                <div className=" px-4 py-2">
                    <input className="px-2 border bg-gray-50 border-slate-400 rounded-md shadow-sm placeholder-slate-600 text-gray-900"  type="text" placeholder="Task Detail" value={taskDetail} onChange={e => setTaskDetail(e.target.value)}  />
                </div>
                <button className="focus:ring-2 focus:ring-black focus:outline-none focus:ring-offset-2 border rounded text-gray-200 hover:text-white px-4 py-1 font-medium hover:shadow-md hover:z-20 hover:bg-cyan-900" title="Add Task" onClick={() => addInput()} >
                    Add Task
                </button>
            </div>
                
            <div className=" text-center items-center">
                <ul className=" flex flex-wrap -m-4 p-6">
                    {taskList.map((newTask) => {
                        return (
                            <li key={newTask.id} className="group max-w-fit mx-auto border border-cyan-600 hover:bg-cyan-800 rounded-lg my-2 py-10 px-20 justify-around">
                                <div className="flex relative">
                                    <h2 className="text-sky-100 group-hover:text-white text-lg mx-1">{newTask.value}</h2>
                                    <h3 className="mx-1 text-gray-100 hidden group-hover:block">{newTask.detail}</h3> 
                                    <button className="mx-1 hidden group-hover:block relative top-0" type="button" onClick={() => deleteTask(newTask.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>

                                    </button>
                                </div>
                                
                            </li>
                                
                        )
                            
                    })}
                        
                </ul> 
            </div>
        </div>
     );
}

export default AddTask;