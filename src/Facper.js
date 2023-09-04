import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Facper() {
  const params = useParams();
  const [fac, setFaculties] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://64ec0e04e51e1e82c577cd29.mockapi.io/Faculty/" + params.id)
      .then((res) => res.json())
      .then((res) => setFaculties(res));
  }, [params.id]);

  const deletefac = () => {
    fetch("https://64ec0e04e51e1e82c577cd29.mockapi.io/Faculty/" + params.id, {
      method: "DELETE"
    }).then((res) => {
      navigate("/");
    });
  };
  return (
    <>
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
          </div>
        </div>
      </div>
      <Link to="/" class="btn btn-primary">
        Back
      </Link>
      <Link to={"/form/" + fac.Faculty_Id} class="btn btn-primary">
        Update
      </Link>
      <Link onClick={deletefac} class="btn btn-primary">
        Delete
      </Link>
    </>
  );
}
