import { useState } from "react";
import UserCard from "./UserCard";


function ShowUser(){
  // const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    {
      id : 1,
      name : "Tanu",
      age : 21,
      likes : 0
    },
    {
      id : 2,
      name : "Abhi",
      age : 22,
      likes : 0
    }
  ]);

  function handleLike(id){
      setUsers(users => users.map(user => user.id === id ? {...user, likes : user.likes + 1} : user));
  }

  function handleDisLike(id){
      setUsers(users => users.map(user => user.id === id ? {...user, likes : Math.max(user.likes - 1, 0)} : user));
  }

  // function TotalLike(){
  //     return users.reduce((total, user) => total + user.likes, 0);
  // }

  const totalikes = users.reduce((total, user) => total + user.likes, 0);
  
  // function increase(){
  //   setCount(count => count + 1);
  // }

  // function decrease(){
  //   if(count > 0){
  //     setCount(count => count - 1);
  //   }
  // }

  return (
      <div>
        {/* <UserCard name = "Tanu" age = {21} onLike = {increase} onDisLike = {decrease} count = {count}/>
        <UserCard name = "Abhi" age = {22} onLike = {increase} onDisLike = {decrease} count = {count}/> */}
        {
          users.map((user) => <UserCard key = {user.id} name = {user.name} age = {user.age} count = {user.likes} onLike = {() => handleLike(user.id)} onDisLike = {() => handleDisLike(user.id)} />)
        }
        {/* <p>Total likes : {TotalLike()}</p> */}
        <p>Total likes : {totalikes}</p>
      </div>
    )
  }
  
  export default ShowUser
  // function Counter() {
    //     const [count, setCount] = useState(0);
    
    //     return (
    //         <div>
    //             <button onClick={() => setCount(count + 1)}>
    //                 Increase
    //             </button>
    
    //             <button onClick={() => {if(count > 0){
    //               setCount(count - 1)
    //             }}}>
    //                 Decrease
    //             </button>
    
    //             <p>{count}</p>
    //         </div>
    //     );
    // }
    
    // export default Counter;