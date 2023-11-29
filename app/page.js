"use client"
import { useState } from "react";

const Page =()=>{

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [mainTask, setMainTask] = useState([])

    const submitHandler =(e)=>{
        e.preventDefault()
        setMainTask([...mainTask, {title, desc}])
        // console.log(title)
        // console.log(desc)
        setTitle("")
        setDesc("")
        console.log(mainTask)
    }

    const deleteHandler =(i)=>{
      let copyTask = [...mainTask]
      copyTask.splice(i,1)
      setMainTask(copyTask)

    }
    let renderTask = <h2>No Task Available</h2>
    
    if(mainTask.length>0){
       renderTask = mainTask.map((t,i)=>{
        return( <li key={i} className="flex items-center justify-between">

          <div className="flex justify-between p-2 mb-5 w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-xl font-medium">{t.desc}</h6>
        </div>
       

         <button 
        onClick={()=>{
          deleteHandler(i)
        }}
        className="bg-green-400 text-white px-4 py-2 rounded font-bold">Complete</button>

         <button 
        onClick={()=>{
          deleteHandler(i)
        }}
        className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        
        </li>)
    })
    }
  return(
    <div>
      <h1 className="bg-black text-white p-5 text-2xl font-bold text-center" >My To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Task Here" 
        className="border-zinc-800 border-2 m-4 px-4 py-2"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <input type="text" placeholder="Enter Description Here" 
        className="border-zinc-800 border-2 m-4 px-4 py-2"
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        />

        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded-md m-5">
          Add Task +</button>
      </form>
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>

      </div>
    </div>  
  )
}

export default Page;