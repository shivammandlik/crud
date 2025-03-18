import { useEffect } from "react";
import { useState } from "react";

let Form = () => {

    let [name, setName] = useState('')
    let [city, setCity] = useState('')
    let [age, setAge] = useState('')
    let [data,setData] = useState([])
    function save()
    {
        if(name =="" || city == "" || age =="")
        {
            alert('Donot leave empty')
        }
        else
        {

    
        let new_inquiry = {
            name,city,age
        }
        let old = localStorage.getItem('inquiry')
        let old2 = old ? JSON.parse(old): []
        old2.push(new_inquiry)

        localStorage.setItem("inquiry",JSON.stringify(old2))
        show()
        setName('')
        setCity('')
        setAge('')
    }
    }

    useEffect(()=>{
        show()
    },[])

    function show()
    {
        let old = localStorage.getItem('inquiry')
        let old2 = old ? JSON.parse(old): []
        setData(old2)
    }

    function del(index)
    {
        let old = localStorage.getItem('inquiry')
        let old2 = old ? JSON.parse(old): []
        old2.splice(index,1)
        localStorage.setItem("inquiry",JSON.stringify(old2))
        show()
    }
    return (
        <>
            <h1>Inquiry Form</h1>

            Name : <input type="text" value={name} placeholder="Enter name" onChange={(e)=> setName(e.target.value) }  />
            <br /><br />
            City : <input type="text" value={city} placeholder="Enter city" onChange={(e)=> setCity(e.target.value) } />
            <br /><br />
            Age : <input type="number" value={age} placeholder="Enter age" onChange={(e)=> setAge(e.target.value) } />
            <br /><br />
            <button onClick={save}>Save</button>

            <hr />
            <table border={1} width={700}>
                <tr>
                    <th>Name</th> <th>City</th> <th>Age</th> <th>Option</th>
                </tr>
                {
                    data.map((s,index)=>{
                        return (
                            <tr>
                            <th>{s.name}</th> <th>{s.city}</th> <th>{s.age}</th>
                            <th>
                                <button onClick={()=>{del(index)}}>Del</button>
                            </th>
                        </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Form;