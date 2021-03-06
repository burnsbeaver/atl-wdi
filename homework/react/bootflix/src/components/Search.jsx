import React from 'react';

// Update the forms to utilize methods being passed down from App.js
const Search = (props) => {
  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form id="title-search-form" method="get">
          <input type="text" name="title" placeholder="Enter movie title" onChange={props.searchChange}/>
          <input onClick={props.searchByTitle} type="button" value="Search for this title" />
        </form>
      </div>

      <div className="search">
        <form id="id-search-form" method="get">
          <input type="text" name="id" placeholder="Enter omdb movie ID" />
          <input onClick={props.searchById} type="button" value="Search by ID" />
        </form>
      </div>

    </section>
  );
};

export default Search;
