import Image from "next/image";

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}


export default function Gallery() {
  return (
    <div>
      <h1>Amazing scientists</h1>

      <div className="flex">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  )
}