import React, { useEffect, useState } from "react";
import axios from "axios";
export default function List() {
  const [array, setArray] = useState([]);
  const fetchApi = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res) {
          setArray(res.data);
        }
      })
      .catch((ex) => {
        console.error(ex);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>user id</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        {array.map((array, index) => {
          return (
            <tr key={index}>
              <td>{array.userId}</td>
              <td>{array.id}</td>
              <td>{array.title}</td>
              <td>{array.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
