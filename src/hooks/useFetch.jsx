import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      console.log("🚀 ~ fetchData ~ error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return data;
};

export default useFetch;
