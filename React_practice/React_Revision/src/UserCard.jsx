// import { useState } from "react";

// function UserCard(props) {
//   const [like, setLike] = useState(0);
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <p>{props.age}</p>
//       <p>Status : {props.age > 18 ? "Adult" : "Minor"}</p>
//       <button onClick={() => setLike(like => like + 1)}>Like</button>
//       <button
//         onClick={() => {
//           if (like > 0) {
//             setLike(like => like - 1);
//           }
//         }}
//       >
//         DisLike
//       </button>
//       <button onClick={() => setLike(0)}>Reset</button>
//       <p>Likes : {like}</p>

//       <p>Total Likes : {props.count}</p>
//     </div>
//   );
// }

// export default UserCard;


import { useState } from "react";

function UserCard(props) {

    return (
        <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <p>Status : {props.age > 18 ? "Adult" : "Minor"}</p>
        <button onClick={props.onLike}>Like</button>
        <button onClick={props.onDisLike}>DisLike</button>

        <p>Likes : {props.count}</p>
        </div>
    );
}

export default UserCard;
