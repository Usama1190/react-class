// import Profile from "./Profile";

export function Profile() {           // named export
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