// export default function ToDoList() {
//     // const name = 'Gregorio Y. Zara';
//     const name = 'Usama';

//     return (
//         <h1>{name}&apos;s To Do List</h1>
//     )
// }



const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}


export default function ToDoList() {
    // const name = 'Gregorio Y. Zara';
    const name = 'Usama';

    return (
        <h1>{name}&apos;s To Do List for {formatDate(today)}</h1>
    )
}