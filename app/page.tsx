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



import Gallery from "./components/Gallery";
import { Profile } from "./components/Gallery";    // named export

export default function Home() {
  return (
    <div>
      {/* <Gallery /> */}
      <Profile />
    </div>
  )
}