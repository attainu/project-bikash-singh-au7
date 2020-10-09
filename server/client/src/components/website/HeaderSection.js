import React, { useEffect, useState } from "react";
import M from "materialize-css";
import { Link, useHistory } from "react-router-dom";

function HeaderSection() {
  const history = useHistory()
  // Create State
  const [category, setCategory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [catQuery, setCatQuery] = useState(null);

  // Search Handler
  const searchHandler = (evt)=>{
      evt.preventDefault()
      history.push(`/search/${query}/${catQuery}`)
  }  

  // Fetching Category Data
  useEffect(() => {
    fetch("/user/allCategoryForWeb", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            setIsLoaded(true);
            const data = result.data;
            setCategory(result.data.slice(0, 6) || []);
          } else {
            M.toast({ html: result.message, classNamees: "bg-danger" });
          }
        },
        (error) => {
          setIsLoaded(true);
        }
      )
  }, []);
  
  // Return Function  
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-10 m-auto pt-5"}>
        <h5 className={"small-heading"}>
          Discover & Connect with great place arround the World
        </h5>
        <h1 className={"big-heading mt-4"}>Let's Discover The Business</h1>
      </div>
      <div className={"col-md-10 m-auto pt-5"}>
        <form onSubmit={(evt)=>searchHandler(evt)}>
          <div className={"row"}>
            <div className={"col-md-5 form-group"}>
              <input
                type={"text"}
                className={"form-control f-c-manual"}
                placeholder={"What are you looking for?"}
                onChange={(evt)=> setQuery(evt.target.value)}
              />
            </div>
            <div className={"col-md-5 form-group"}>
              <select className={"form-control f-c-manual"} onChange={(evt)=> setCatQuery(evt.target.value)}>
                <option value={null} className={"text-muted"}>
                  All Category
                </option>
                {category.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={"col-md-2 form-group"}>
              <button className={"btn btn-danger px-5 f-b-manual"}>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className={"col-md-7 m-auto"}>
        <div className="card-group mt-2">
          {category.map((item, index) => {
            return (
              <div className="card rounded-0 bg-transparent small-card" key={index}>
                <Link to={`/category/${item.slug}`}>
                  <div className="card-body text-center">
                    <i className={`${item.icon} big-icon text-white`}></i>
                    <h5 className="card-title text-white mt-3">
                      {" "}
                      {item.title}{" "}
                    </h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
