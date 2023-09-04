import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const { id } = useParams();
  const [Faculties, setFaculties] = useState([]);
  useEffect(() => {
    fetch("https://64ec0e04e51e1e82c577cd29.mockapi.io/Faculty")
      .then((res) => res.json())
      .then((res) => setFaculties(res));
  }, []);
  const FacultiesFormatted = Faculties.map((fac) => {
    return (
      <div className="col-3">
        <div class="card m-3" style={{ width: "100%" }}>
          <img src={fac.Faculty_Img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{fac.Faculty_Id}</h5>
            <p class="card-text">
              {fac.Faculty_Name}
              <br />
              {fac.Faculty_Country}
              <br />
              {fac.Faculty_Description}
            </p>
            <Link to={"/" + fac.Faculty_Id} class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">{FacultiesFormatted}</div>
      </div>
      <Link to={"/form/0"} class="btn btn-primary align-center">
        INSERT
      </Link>
    </>
  );
}
