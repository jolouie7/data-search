import React, {useState, useEffect} from 'react';
import data from "./db.json"
// import ItemSearch from "./components/ItemSearch";
import Post from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  // i'm initializing data.post from db.json file as filteredList
  const [filteredList, setFilteredList] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/posts?page=${currentPage}&limit=${postPerPage}`
      );
      const data = await res.json();
      console.log(data);
      setPosts(data);
      setLoading(false);
    };
    // set posts to currentPosts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    setCurrentPosts(data.posts.slice(indexOfFirstPost, indexOfLastPost));
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(
        `http://localhost:5000/posts?page=${currentPage}&limit=${postPerPage}`
      );
      const data = await res.json();
      setFilteredList(data);
    }
    fetchAPI()
  }, [])

  console.log(filteredList);
  console.log(currentPosts);
  //get posts
  // if (loading === false) {
  // const indexOfLastPost = currentPage * postPerPage
  // const indexOfFirstPost = indexOfLastPost - postPerPage
  // const currentPosts = posts.results.slice(indexOfFirstPost, indexOfLastPost);
  // const currentPosts = posts.results.slice(0, 10);
  //   return currentPosts
  // } else {
  //   return <h1>loading...</h1>
  // }

  const handleChange = (e) => {
    setSearchWord(e.target.value);

    if (e.target.value !== "") {
      setFilteredList(
        data.posts.filter((post) =>
          post.title.toLowerCase().includes(e.target.value)
        )
      );
    } else {
      setFilteredList(data.posts);
    }
  };

  // return (
  //   <div className="App">
  //     <label>Search through the Data</label>
  //     <input placeholder="type something to search" value={searchWord} onChange={handleChange}></input>
      // <ul>
      // {
      //   filteredList.map((post, index) =>
      //     <li key={index}>{post.title}</li>
      //   )
      // }
      // </ul>
  //   </div>
  // );
  return (
    <div>
      <h1>POST</h1>
      <label>Search through the Data</label>{" "}
      <input
        placeholder="type something to search"
        value={searchWord}
        onChange={handleChange}
      ></input>
      {loading === false && Object.keys(posts).length !== 0 ? (
        <Post posts={filteredList} loading={loading} />
      ) : null}
      {/* <ul>
        {filteredList.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
