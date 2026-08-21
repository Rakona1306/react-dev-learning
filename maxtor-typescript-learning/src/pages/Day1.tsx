//import { useEffect, useState } from "react";

import Day1Exercise1 from "../components/molecules/Day1/day1-exercise-1";
import Day1Exercise2 from "../components/molecules/Day1/day1-exercise-2";


export default function Day1() {
  return (
    <div>
      <Day1Exercise1/>
      <Day1Exercise2/>
    </div>
  )
}


/*import { useEffect, useState } from "react";
import PostCard from "../components/atoms/post-card/post-card";

const getPosts = async (setPost) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //console.log(data);
  setPost(data);
};

export default function FirstComponent() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
// estado de carga p
  useEffect(() => {
    try {
      getPosts(setPost);
    } catch (err) {
      console.log(err)
    }finally{
      setLoading(false)
    }
  }, []); // los "[]" son para ejecutar el codigo una vez inicies el componente
  if (loading == true) {
    return <h1>cargando</h1>;
  }

  const postCards = posts.map((post) => {
    return <li key={post.id}>{post.email}</li>;
  });
  return <div>{postCards}</div>;
}
 */