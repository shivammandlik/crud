import Sample2 from "./Sample2"

function Sample1(props)
{
    return(
        <>
            <div style={{border:"1px solid black",height:"auto",background:"pink",padding:"20px"}}>
                <h1>Sample 1 - {props.name} - {props.age}</h1>
                <Sample2 name= {props.name} age={props.age}   />
            </div>
            

        </>
    )
}


export default Sample1