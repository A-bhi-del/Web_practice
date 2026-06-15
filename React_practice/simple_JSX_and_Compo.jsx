// function Profile(){
//     const name = "Abhi";
//     const Role = "Web Developer";
//     const age = 22;

//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>{Role}</p>
//             <p>{age}</p>
//         </div>
//     )
// }

// function UserCard() {
//     const name = "Abhi";
//     const age = 20;

//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>{age}</p>
//             {age > 18 ? <p>Adult</p> : <p>Minor</p>}
//         </div>
//     )
// }

// function UserCard(props){
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.age}</p>
//             <p>Status : {props.age > 18 ? "Adult" : "Minor"}</p>
//         </div>
//     )
// }

// <UserCard name="Tanu" age={19}/>
{/* <UserCard name="Abhi" age={20}/> */}

function CounTer(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <Button onclick = {() => setCount(count + 1)}>Increase</Button>
            <Button onclick = {() => setCount(count - 1)}>Decrease</Button>
            <p>{count}</p>
        </div>
    )
}