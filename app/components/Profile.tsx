// export default function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3Am.jpg"
//       alt="Katherine Johnson"
//     />
//   )
// }

// import Avatar from "./Avatar";


// export default function Profile() {
//     return (
//       <Avatar 
//         person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
//         // size={100}
//       />
//     )
// }





import Avatar from "./Avatar";


interface Profile {
    person: Person;
    size?: number;
}

interface Person {
    name: string;
    imageId: string;
}


export default function Profile(props: Profile) {
    return (
      <Avatar {...props} />
    )
}