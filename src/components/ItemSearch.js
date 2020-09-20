// import React, {useState, useEffect} from 'react'

// const ItemSearch = (searchTerm, pageNumber) => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [postPerPage, setPostPerPage] = useState(10)

//   useEffect(() => {
//     const fetchAPI = async () => {
//       setLoading(true)
//       const res = await fetch(
//         `http://localhost:5000/posts?page=${currentPage}&limit=${postPerPage}`
//       );
//       const data = await res.json()
//       console.log(data)
//       setPosts(data);
//       setLoading(false)
//     }
//     fetchAPI();
//   }, [])

//   console.log(posts)
//   return (
//     <div>
//       Hi there
//     </div>
//   )
// }

// export default ItemSearch
