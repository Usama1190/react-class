import Image from "next/image";

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3Am.jpg"
//       alt="Katherine Johnson"
//     />
//   )
// }


// export default function Gallery() {
//   return (
//     <div>
//       <h1>Amazing scientists</h1>

//       <div className="flex">
//         <Profile />
//         <Profile />
//         <Profile />
//       </div>
//     </div>
//   )
// }


// import Gallery from "./components/Gallery";

// export default function Home() {
//   return (
//     <Gallery />
//   )
// }



// import Gallery from "./components/Gallery";
// import { Profile } from "./components/Gallery";    // named export

// export default function Home() {
//   return (
//     <div>
//       {/* <Gallery /> */}
//       <Profile />
//     </div>
//   )
// }




// import Gallery from "./components/Gallery";
// import { Profile } from "./components/Gallery";    // named export
// import ToDo from "./components/ToDo";
// import Avatar from "./components/Avatar";

// export default function Home() {
//   return (
//     <div>
//       {/* <Profile /> */}
//       {/* <ToDo /> */}
//       <Avatar />
//     </div>
//   )
// }



// import Gallery from "./components/Gallery";
// import { Profile } from "./components/Gallery";    // named export
// import ToDo from "./components/ToDo";
// import Avatar from "./components/Avatar";
// import ToDoList from "./components/ToDoList";

// export default function Home() {
//   return (
//     <div>
//       {/* <Profile /> */}
//       {/* <ToDo /> */}
//       {/* <Avatar /> */}
//       <ToDoList />
//     </div>
//   )
// }





import Gallery from "./components/Gallery";
// import { Profile } from "./components/Gallery";    // named export
import ToDo from "./components/ToDo";
import Avatar from "./components/Avatar";
import ToDoList from "./components/ToDoList";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <div>
      <Profile person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={100}/>
      {/* <ToDo /> */}
      {/* <Avatar /> */}
      {/* <ToDoList /> */}
    </div>
  )
}