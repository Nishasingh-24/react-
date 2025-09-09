import * as React from 'react';
const App = () => {
  const stories = [
    {
      title: 'React',
      url:'https://reactjs.org/',
      author:'Jordan Walke',
      num_comments:3,
      points:4,
      objectID:0,
    },
    {
      title:'Redux',
      url:'https://redux.js.org',
      author:'Dan Abramov, Andrew Clark',
      num_comments:2,
      points:5,
      objectID:1,
    },

  ];

  return (
    <>
    <h1>Stories</h1>
    {/* Pass data as prop */}
    <List list = {stories}/>
    
    </>
  );

 
};

// const List = (Props) => (
//   <ul>
//     {Props.list.map((items) =>(
//       <li key = {items.objectID}>
//         <span>title: {items.title}</span>
//       <br />
//       <span> url: <a href={items.url}>{items.url}</a></span>
//       <br />
//       <span>Author: {items.author}</span>
//       <br />
//       <span>num_comments: {items.num_comments}</span>
//       <br />
//       <span> objectID: {items.objectID}</span>
//       <br />
//      <span> points: {items.points}</span>
      
//       </li>
      
//     ))}
//   </ul>
// );

const List = (props) => (
 
   <ul>
     {props.list.map((item) => (
      <Item key={item.objectID} item={item}/>
    ))}
  
   </ul>
)
const Item =(props)=>(
  <li>
     <span>title:{props.item.title}</span>
     <br />
      <span>url:<a href={props.item.url}>{props.item.url}</a></span>
      <br />
    <span>Author:{props.item.author}</span>
    <br />
    <span>num_comments:{props.item.num_comments}</span>
    <br />
    <span>Points:{props.item.points}</span>
    <br />
     <span>ObjectID:{props.item.objectID}</span>
  </li>
  
)


export default App
