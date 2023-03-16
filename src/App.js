import './App.css';
import AddTask from './component/Addtask';

function App() {
  return (
    <div className="App text-gray-400 ">
      <header className='top-0 z-10 text-center shadow-sm'>
        <div className=" border bg-yellow-900 text-4xl">
          <h1 className='text-white font-medium font-serif'>ToDo List</h1>
        </div>
      </header>
      
      <AddTask/>
    </div>
  );
}

export default App;
