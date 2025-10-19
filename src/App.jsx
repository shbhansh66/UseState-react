import React,{useState} from 'react'

const App = () => {

const [num, setNum] = useState(20)
const [obj, setobj] = useState({users:'Shubhanshu',age:'22'});
const [array, setarray] = useState([10,20,30]);


 function increased(elem){
  setNum(num+1)
 }

 function decreased(elem){
  setNum(num-1)
 }

 function user(elem){
  const newobj={...obj};
  newobj.users='Adarsh'
  setobj(newobj)
 }

 function arrayy(){
  const newarray=[...array];
  newarray.push(99)
  setarray(newarray)
 }


  return (
    <div className='overflow-hidden bg-gray-300 w-[30rem] h-[30rem] flex flex-col justify-center items-center m-10 border-2 rounded-lg shadow-xl p-48 shadow-xl  shadow-green-700'>
      <h1 className='m-2 w-[20rem] text-4xl'>Current number:-{num}</h1>
     <button onClick={increased} className="text-3xl font-semibold border-2 p-2 rounded-xl bg-green-500 shadow-xl hover:bg-gray-500 shadow-green-700 mt-4">Increased</button>

     <button onClick={decreased} className="text-3xl font-semibold border-2 p-2 rounded-xl bg-green-500 shadow-xl hover:bg-gray-500 shadow-green-700 mt-4">Decreased</button>

 <h1 className='m-2 w-[20rem] text-3xl'>User:-{obj.users} ,{obj.age}</h1>
     <button onClick={user} className="text-3xl font-semibold border-2 p-2 rounded-xl bg-green-500 shadow-xl hover:bg-gray-500 shadow-green-700 mt-4">Users</button>


<h1 className='flex flex-wrap m-2 w-[20rem] text-3xl'>{array}</h1>
     <button onClick={arrayy} className="text-3xl font-semibold border-2 p-2 rounded-xl bg-green-500 shadow-xl hover:bg-gray-500 shadow-green-700 mt-4">Array</button>


 
    </div>
  )
}

export default App
