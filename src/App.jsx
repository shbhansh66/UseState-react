import React,{useState} from 'react'

const App = () => {

const [num, setNum] = useState(20)
 function change(elem){
  setNum(num+1)
 }


  return (
    <div className=' bg-gray-300 w-12 h-12 flex flex-col justify-center items-center m-10 border-2 rounded-lg shadow-xl p-48 shadow-xl  shadow-green-700'>
      <h1 className='text-4xl'>Current number:-{num}</h1>
     <button onClick={change} className="text-3xl font-semibold border-2 p-2 rounded-xl bg-green-500 shadow-xl hover:bg-gray-500 shadow-green-700 mt-4">Click Me</button>
    </div>
  )
}

export default App
