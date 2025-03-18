// function Child2()
// {
//     return (<>
//     <h1>Child2- </h1>
//     </>)
// }

// export default Child2


import { useContext } from "react"
import { MyContext } from "./Parent"

function Child2()
{
    let student = useContext(MyContext)
    return (<>
    <h1>Child2 -  {student.name}- {student.age} , {student.city}</h1>
    </>)
}

export default Child2