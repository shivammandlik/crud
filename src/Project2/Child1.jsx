import { useContext } from "react"
import { MyContext } from "./Parent"
function Child1()
{
    let student=useContext(MyContext)
    return (<>
    
    <h1>Child1 -{student.name}-{student.age},{student.city},{student.class} </h1>
    </>)
}

export default Child1