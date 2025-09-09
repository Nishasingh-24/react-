import * as React from 'react';
import { jsx } from 'react/jsx-runtime';

// const stories = [
//     {
//         title:'react',
//         url:'react.com',
//         author:'walke'
        

//     }
//     ,
//     {
//         title:'node js',
//         url:'nodejs.com',
//         author:'mark'
//     }
// ]
// function List(){
//     return(
//         <>
//         <ul>
//             {
//                 stories.map(function(story){
//                     return(
//                         <li key={story.objectID}>
//                             <span>Title:<a href={story.url}>{story.title}</a></span>
//                             <br />
                            
//                             <span> author:{story.author}</span>
//                         </li>
//                     )
//                 })
//             }
//         </ul>
//         </>
//     )
// }


// function Search (){
//     return(
//         <>
//         < label htmlFor ="Search">Search</label>
//         < input type="text" id="Search "/>
        
        
//         </>
//     )
// }


// function App(){
//     return(
//         <>
//         <h1>Search</h1>
//         <Search/>
//         <List/>
//         </>
//     )
// }


// project 1
// Handler function in jsx


// const Search = () => {
//     const handleChange = (event) => {
//         console.log('Event',event);

//     };
//     return (
//         <>
//         <label htmlFor="search">Search:</label>
//         <input id="search" type="text" onChange={handleChange} />
//         </>
//     )
// }

// function App() {
//     return(
//         <>
//         <Search/>
//         </>
//     )
// }


// project 2
// const Search = () => {
//     const handleChange = (event) =>{
//         console.log('Value:',event.target.value);
//     };
//     return (
//         <>
//         <label htmlFor="search">Search:</label>
//         <input id="search" type="text" onChange={handleChange} />
        
//         </>
//     );
// };

// function App() {
//     return(
//         <>
//         <Search/>
//         </>
//     )
// }

// project 3

const Search = () => {
    const handleChange = (event) => {
        console.log('Event:',event);
        console.log('value:',event.target.value);
    };
    return(
    <>
    <label htmlFor="search: "></label>
    <input id="search" type="text" onChange={handleChange} />
    </>
);
};

function App() {
    return(
        <>
        <Search/>
        </>
    )
}


export default App
