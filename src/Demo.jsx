import js from "@eslint/js"
import { use, useEffect } from "react"
import { useState } from "react"



let Demo=()=>{

    let [name ,setName]=useState("")
    let [age,setAge]=useState("")
    let [city ,setCity]=useState("")
    let [data,setData]=useState([])
    
    function show(){
     

        let new_inquiry={
            name,age,city
        }

        let old=localStorage.getItem("inquiry")
        let old2=old ? JSON.parse(old) : [];
        old2.push(new_inquiry)
    
         localStorage.setItem("inquiry",JSON.stringify(old2))
         save()
         setName("")
         setAge("")
         setCity("")

    }
         useEffect(()=>{
            save()
         },[])

   
         function save (){
         let old=localStorage.getItem("inquiry")
        let old2=old ? JSON.parse(old) : [];
        setData(old2)

         }
         function del(index)
         {
             let old = localStorage.getItem('inquiry')
             let old2 = old ? JSON.parse(old): []
             old2.splice(index,1)
             localStorage.setItem("inquiry",JSON.stringify(old2))
             save()
         }
    
         const editEntry = (index) => {
            let old = localStorage.getItem('inquiry')
            let old2 = old ? JSON.parse(old): []

            const entry = old2[index];
            localStorage.setItem("inquiry",JSON.stringify(old2))

            setName(entry.name);
            setAge(entry.age);
            setCity(entry.city);
            setEditIndex(index);
            save()
          };
    

    return(<>
      <h1>CRUD Opretion</h1>
    Name : <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} /><br></br><br></br>
     age : <input type="number" name="" id="" value={age} onChange={(e)=>setAge(e.target.value)} /> <br></br><br></br>
     city : <input type="text" name="" id="" value={city} onChange={(e)=>setCity(e.target.value)} /> <br></br><br></br>

    <button onClick={show}>save</button>

    <hr></hr>
    <table border={1} width={800}>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>city</th>
            <th>option</th>
            <th>update</th>

    
        </tr>

   {

   data.map((p , index)=>{
    return (

        <tr>
        <th>{p.name}</th>
        <th>{p.age}</th>
        <th>{p.city}</th>
        <th>
        <button onClick={()=>{del(index)}}>Del</button>

        </th>
        <th>
        <button onClick={() => editEntry(index)}>Edit</button>

        </th>

    </tr>

    )

   })

   }


    </table>
    
    
    </>)


}
export default Demo