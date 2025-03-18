import { use, useEffect, useState } from "react"



let Local = () => {
   let [name, setName] = useState('')
   let [age, setAge] = useState('')
   let [data, setData] = useState([])

   function save() {

      let student_add = {
         name, age
      }



      let old = localStorage.getItem("inquiry")
      let old2 = old ? JSON.parse(old) : [];
      old2.push(student_add)
      localStorage.setItem("inquiry", JSON.stringify(old2))

      show()
      setName('')
      setAge('')



   }

   useEffect(() => {
      show()
   }, [])
   function show() {


      let old = localStorage.getItem("inquiry")
      let old2 = old ? JSON.parse(old) : [];
      setData(old2)


   }

   function del(index) {


      let old = localStorage.getItem("inquiry")
      let old2 = old ? JSON.parse(old) : [];
      old2.splice(index, 1)
      localStorage.setItem("inquiry", JSON.stringify(old2))


      show()
   }









   return (<>

      Name  : <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br></br> <br></br>
      Age  :   <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /><br></br> <br></br>
      <button onClick={save}>save</button>
      <hr></hr>

      <table border={1}>

         <tr>
            <th>name</th>
            <th>age</th>

         </tr>


         {

            data.map((p, index) => {
               return (
                  <tr>
                     <th>{p.name}</th>
                     <th>{p.age}</th>

                     <button onClick={() => { del(index) }}>Del</button>

                  </tr>

               )
            })

         }

      </table>


   </>)






}
export default Local