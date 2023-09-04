import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Form() {
  const params = useParams();
  const navigate = useNavigate();
  const [fac, setFaculties] = useState({});
  useEffect(() => {
    if (params.id > 0) {
      fetch("https://64ec0e04e51e1e82c577cd29.mockapi.io/Faculty/" + params.id)
        .then((res) => res.json())
        .then((res) => setFaculties(res));
    } else {
      setFaculties({});
    }
  }, [params.id]);

  const formsubmit = () => {
    if (params.id > 0) {
      fetch(
        "https://64ec0e04e51e1e82c577cd29.mockapi.io/Faculty/" + params.id,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fac)
        }
      ).then((res) => navigate("/"));
    } else {
      fetch("https://64ec0e04e51e1e82c577cd29.mockapi.io/Faculty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fac)
      }).then((res) => navigate("/"));
    }
  };
  return (
    <table>
      <tr>
        <td>Faculty Name</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={fac.Faculty_Name}
            onChange={(e) => {
              setFaculties({ ...fac, Faculty_Name: e.target.value });
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Faculty Image</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={fac.Faculty_Img}
            onChange={(e) => {
              setFaculties({ ...fac, Faculty_Img: e.target.value });
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Faculty Country</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={fac.Faculty_Country}
            onChange={(e) => {
              setFaculties({ ...fac, Faculty_Country: e.target.value });
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Faculty Description</td>
        <td>:</td>
        <td>
          <input
            type="text"
            value={fac.Faculty_Description}
            onChange={(e) => {
              setFaculties({ ...fac, Faculty_Description: e.target.value });
            }}
          />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button onClick={formsubmit}>done</button>
        </td>
        <td></td>
      </tr>
    </table>
  );
}
