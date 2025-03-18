import Sample3 from "./Sample3"

function Sample2(props) {
    return (
        <>
            <div style={{ border: "1px solid black", height: "auto", background: "skyblue" ,padding:"20px"}}>

                <h1>Sample 2 - {props.name} - {props.age}</h1>
                <Sample3 name={props.name} age={props.age} />
            </div>
        </>
    )
}


export default Sample2