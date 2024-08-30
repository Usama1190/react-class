interface AvatarType {
    person: Person;
    size?: number;
}

interface Person {
    name: string;
    imageId: string;
}

export default function Avatar({person, size = 500}: AvatarType) {   // default value of props
    const name = person.name;
    const avatar = `https://i.imgur.com/${person.imageId}.jpg`;
    // const description = "Katherine Johnson";

    return (
        <>
            <h1>{name}</h1>
            <img
            src={avatar}
            alt={name}
            width={size}
            height={size}
            />
        </>

    )
}