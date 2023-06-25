import { useEffect, useState } from "react";
import ApiContext from "./Context";
// import useFetch from "../hooks/useFetch";

const GetData = (props) => {
  const [userdata, setUserdata] = useState([]);
  const [postdata, setPostdata] = useState([]);

  const fetchData = async (url, setState) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.log("🚀 ~ fetchUsersData ~ error:", error);
    }
  };

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users", setUserdata);
    fetchData("https://jsonplaceholder.typicode.com/posts", setPostdata);
  }, []);

  // const users = useFetch("https://jsonplaceholder.typicode.com/users");

  // const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  // useEffect(() => {
  //   setUserdata(users);
  // }, [userdata]);

  // useEffect(() => {
  //   setPostdata(posts);
  // }, [postdata]);

  return (
    <ApiContext.Provider value={{ userdata, postdata }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default GetData;
