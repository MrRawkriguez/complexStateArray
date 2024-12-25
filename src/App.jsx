import './App.css'
import { useState } from 'react';

function App() {

  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize
   * the state array as an empty array
   *
   * Don't worry about fixing 'addFavoriteThing' quite yet.
   */

  const [myFavoriteThings, setMyFavoriteThings] = useState([]) // Initialize state as an empty array

  const allFavoriteThings = [
    "🎨", "🌊", "🌹", "🐱",
    "🍦", "❤️", "🔥", "🌿",
    "🎁", "🍌", "🍎", "🍅",
    "🔔", "🦞", "🌅", "💍"
  ];


  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.
    setMyFavoriteThings(prevFav => [...prevFav, allFavoriteThings[prevFav.length]])
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Stone Cold</button>
      <section aria-label='polite'>
        {thingsElements}
      </section>
    </main>
  )
}

export default App
