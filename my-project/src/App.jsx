import * as React from 'react';

const stories = [
    {
        title:'react',
        url:'react.com',
        author:'walke'
        

    }
    ,
    {
        title:'node js',
        url:'nodejs.com',
        author:'mark'
    }
]
function List(){
    return(
        <>
        <ul>
            {
                stories.map(function(story){
                    return(
                        <li key={story.objectID}>
                            <span>Title:<a href={story.url}>{story.title}</a></span>
                            <br />
                            
                            <span> author:{story.author}</span>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}


function Search (){
    return(
        <>
        < label htmlFor ="Search">Search</label>
        < input type="text" id="Search "/>
        
        
        </>
    )
}


function App(){
    return(
        <>
        <h1>Search</h1>
        <Search/>
        <List/>
        </>
    )
}


export default App
