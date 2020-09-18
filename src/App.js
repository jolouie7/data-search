import React, {useState} from 'react';
import data from "./db.json"

function App() {
  // i'm initializing data.post from db.json file as filteredList
  const [filteredList, setFilteredList] = useState(data.posts)
  const [searchWord, setSearchWord] = useState("")
  // console.log(data)

  const handleChange = (e) => {
    setSearchWord(e.target.value)

    if (e.target.value !== "") {
      setFilteredList(
        data.posts.filter((post) =>
          post.title.toLowerCase().includes(e.target.value)
        )
      );
    } else {
      setFilteredList(data.posts);
    }
  }

  return (
    <div className="App">
      <label>Search through the Data</label>
      <input placeholder="type something to search" value={searchWord} onChange={handleChange}></input>
      <ul>
      {
        filteredList.map((post, index) =>
          <li key={index}>{post.title}</li>
        )
      }
      </ul>
    </div>
  );
}

export default App;
