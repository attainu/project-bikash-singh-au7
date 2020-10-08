import React, { useEffect, useState } from "react";
import M from "materialize-css";
import $ from "jquery";
import { Link } from "react-router-dom";

const PublishedListing = (props) => {
  const {match} = props
  // Creating the state variable
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [listing, setListing] = useState([]);
  const [data, setData] = useState({});

  // Delete Submit Handler
  const deleteSubmitHandler = (evt) => {
    setIsDeleted(false);
    evt.preventDefault();

    fetch("/admin/deleteBusiness", {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            M.toast({ html: result.message, classes: "bg-success" });
            setIsDeleted(true);
            $("#deleteUserModel").click();
          } else {
            M.toast({ html: result.message, classes: "bg-success" });
            setIsDeleted(false);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Fetching the data
  useEffect(() => {
    fetch("/admin/publishedBusiness", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            setIsLoaded(true);
            setListing(result.data || []);
          } else {
            M.toast({ html: result.message, classes: "bg-danger" });
            setIsLoaded(true);
          }
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  }, [isDeleted]);

  return (
    <div className="page-wrapper">
      <div className={"container-fluid"}>
        {/* Bread crumb and right sidebar toggle */}
        <div className="row page-titles">
          <div className="col-md-5 col-8 align-self-center">
            <h3 className="text-themecolor m-b-0 m-t-0">Published Listings</h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
              <Link to="/admin">Admin</Link>
              </li>
              <li className="breadcrumb-item active">Published Listing</li>
            </ol>
          </div>
          
        </div>
        {/* End Bread crumb and right sidebar toggle */}
        <div className={"row"}>
          <div className={"col-md-10"}>
            <div className="card border-0 rounded-0 m-0 py-1">
              <div className="card-body py-0">
                <div className="">
                  <table
                    id="myTable1"
                    className="table table-bordered table-striped my-0"
                  >
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Photo</th>
                        <th>Category</th>
                        <th>user</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isLoaded && (
                        <tr>
                          <td colSpan={5}>Loading....</td>
                        </tr>
                      )}

                      {listing.map((list, index) => {
                        return (
                          <tr key={index}>
                            <td> {list.title} </td>
                            <td> {list.logo} </td>
                            <td> {list.category.title} </td>
                            <td> {list.user.name} </td>
                            <td>
                              
                              {list.status ? (
                                <span>Active</span>
                              ) : (
                                <span>Disabled</span>
                              )}
                            </td>
                            <td>
                              <div
                                className="btn-group btn-group-xs"
                                role="group"
                              >
                                <Link
                                  className="btn btn-info footable-edit rounded-0"
                                  to={`/admin/editListing/${list.slug}`}
                                >
                                  <span
                                    className="fas fa-pencil-alt"
                                    aria-hidden="true"
                                  ></span>
                                </Link>
                                <button
                                  type="button"
                                  className="ml-2 btn btn-danger footable-delete rounded-0"
                                  data-toggle="modal"
                                  data-target="#deleteUserModel"
                                  onClick={(e)=>{setData({_id:list._id})}}
                                >
                                  <span
                                    className="fas fa-trash-alt"
                                    aria-hidden="true"
                                  ></span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -- Model Designing -- */}
        <div>
          {/* -- Delete Modal -- */}
          <div
            className="modal fade"
            id="deleteUserModel"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addUserModelLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-0">
                <div className="modal-body text-center">
                  <img
                    style={{ width: "150px" }}
                    className={"img img-fluid"}
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5R1g82DqzH4itsxpVCofNGWbAzKN_PJDBew&usqp=CAU"
                    }
                  />
                  <h4 className={"text-center mt-2"}>Do You Want to Delete?</h4>
                  <p>
                    When you delete the User all the Business is also deleted
                    connected with this User
                  </p>
                  <div className={"form-group"}>
                    <button
                      className="btn btn-info rounded-0 px-3"
                      type={"submit"}
                      onClick={deleteSubmitHandler}
                    >
                      Yes
                    </button>
                    <button
                      className="btn btn-secondary rounded-0 ml-2 px-3"
                      data-dismiss="modal"
                      id={'closeUpdateButton'}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedListing;
