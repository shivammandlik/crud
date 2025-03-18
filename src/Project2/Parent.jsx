// import { createContext } from "react"
// import Child2 from "./Child2"

// export let MyContext = createContext()

// function Parent() {
//     // let name = "Aarush"
//     let student ={
//         name:"Aarush",
//         age:8,
//         city:"Vaijapur"
//     }
//     // let students = [
//     //     {}
//     //     {}
//     //     {}
//     // ]
// return (<>

//         <MyContext.Provider value={student} >

//             <h1>Parent - </h1>
//             <Child2 />

//         </MyContext.Provider>


//     </>)
// }

// export default Parent


















// import { createContext} from "react";
// import Child2 from "./Child2"
// export let MyContext=createContext()

// function Parent(){

//     let student={
//         name:"shivam",
//         age:"20",
//         city:"gangapur"
//     }



//     return(<>
    
//     <MyContext.Provider value={student} >

//          <h1>Parent - </h1>
//              <Child2 />
//          </MyContext.Provider>


       

//     </>)
// }
// export default Parent

























import {createContext} from "react";
import Child1 from "./Child1";


export let MyContext=createContext()
function parent(){

    let stud={
        name:"shivam",
        age:"20",
        city:"gangapur",
        class:"BCS"
    }


    return(<>
<MyContext.Provider value={stud}>
<h1>parent</h1>
<Child1/>
</MyContext.Provider>

    
    
    </>)
}
export default parent