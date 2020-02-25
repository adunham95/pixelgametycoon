import React, {useState, useEffect} from 'react';
import {getGenres} from "../data/genres"

function NewGame() {
//   const [modalID, setModalID] = useState("false");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
      //Set the genres 
      setGenres(getGenres());
  });


  return (
    <div className="newGame">
        New Game
        <form>
            <div>
                <label htmlFor="name">Game Name</label>
                <input id="name" defaultValue="Game Name" />  
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <select id="genre">
                    <option value="">Select Genre</option> 
                    {
                        genres.map(g =>{
                            return <option value={g.id}>{g.name}</option> 
                        })
                    }   
                </select>  
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="">Select Category</option>    
                </select>  
            </div>
            <div>
                <label htmlFor="platform">Platform</label>
                <select id="platform">
                    <option value="">Select Platform</option>    
                </select>  
            </div>
        </form>
    </div>
  );
}

export default NewGame;
