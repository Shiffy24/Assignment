import React from 'react'
const Books= [
    {
        id:1,
      title: 'The water dancer',
      author: 'Oprahs book club',
    genre:'fantasy'
    },
    {
        id:2,
      title: 'The adventures of sherlock holmes',
      author: 'Arthur conan doyle',
      genre:'adventure'
      },
      {
        id:3,
        title: 'To kill a mocking bird',
        author: 'Harper Lee',
        genre:'Classic'
        },
        {
            id:4,
          title: 'The walking dead',
          author: 'robert kirkman',
          genre:'Novel'
          },
          {
            id:5,
            title: 'The night fire',
            author: 'Michael Connelly',
            genre:'Detective'
            }
  ]


function BookList() {
  
    const arrayDataItems = Books.map(Books => 
      <ul key={Books.id}>
       <li> <p>Title :   {Books.title}</p></li>
        <li><p>Author :  {Books.author}</p></li>
        <li><p>Genre :   {Books.genre}</p></li>
      </ul>
    )
  
    return (
      <div className="container">
        <div>
          <h1>Books</h1>
        </div>
        <ul>{arrayDataItems}</ul>
      </div>
    );
  }
  
  export default BookList;