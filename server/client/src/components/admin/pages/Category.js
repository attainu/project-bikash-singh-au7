import React, { useState, useEffect } from "react";
import M from 'materialize-css'
import $ from "jquery"; 
import { Link } from "react-router-dom";

//  Component Function
const Category = (props) => {
  const [title, settitle] = useState("");
  const [slug, setslug] = useState("");
  const [icon, seticon] = useState("");
  const [status, setstatus] = useState(true);
  const [isAdded, setIsAdded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [allCategory, setAllCategory] = useState([])
  const [data, setData] = useState({})
  const [isUpdated, setIsUpdated] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const [deleteId, setDeleteId] = useState('')
  const [deleteConfirmation, setdeleteConfirmation] = useState(false)

  // Title Handler
  const titleChangeHandler = (evt) =>{
    const value = evt.target.value
    settitle(value)
    setslug(value.toLowerCase().replace(/ /gi,'-'))    
    document.getElementById("slug").value = slug;
  }

  // Update the state while clicking the edit button
  const updateState = (list) => {
    setData(list)
  };

  // Update Submit Handler
  const updateSubmitHandler = (evt)=>{
      setIsUpdated(false)
      evt.preventDefault()
      const categoryData = {
          title: data.title,
          slug: data.slug,
          icon: data.icon,
          status: data.status,
          _id: data._id
      }

      fetch("/admin/updateCategory", {
        method: "PUT",
        body: JSON.stringify(categoryData),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt_token')}` 
        }
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if(result.success){
              M.toast({html: result.message, classes:'bg-success'})
              setIsUpdated(true)
              $("#closeUpdateMOdelButton").click();
              
            }else{
              if(result.title) M.toast({html: result.title, classes:'bg-danger'})
              if(result.slug) M.toast({html: result.slug, classes:'bg-danger'})
              if(result.status) M.toast({html: result.status, classes:'bg-danger'})
              if(result.icon) M.toast({html: result.icon, classes:'bg-danger'})
              if(result.message) M.toast({html: result.message, classes:'bg-danger'})
            }
            
          },
          (error) => {
            console.log(error)
          }
        );  
    
  }

   // Delete Submit Handler
   const deleteSubmitHandler = ()=>{
    setIsDeleted(false)
    const categoryData = {
        _id: deleteId
    }

    fetch("/admin/deleteCategory", {
      method: "DELETE",
      body: JSON.stringify(categoryData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
      }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if(result.success){
            M.toast({html: result.message, classes:'bg-success'})
            setIsDeleted(true)
            $("#closeDeleteModelButton").click();
            setDeleteId('')
          }else{
            if(result.Id) M.toast({html: result._id, classes:'bg-danger'})
          }
        },
        (error) => {
          console.log(error)
        }
      );  
  
}

  // Submit Handler
  const submitHandler = (evt)=>{
    setIsAdded(false)
      evt.preventDefault()
      const userData = {
          title,
          slug,
          status,
          icon
      }

      fetch("/admin/addCategory", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
        }
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if(result.success){
              M.toast({html: result.message, classes:'bg-success'})
              $("#closeAddCategoryButton").click();
              setIsAdded(true)
              setslug('')
              settitle('')
              seticon("")
            }else{
              if(result.title) M.toast({html: result.title, classes:'bg-danger'})
              if(result.slug) M.toast({html: result.slug, classes:'bg-danger'})
              if(result.status) M.toast({html: result.status, classes:'bg-danger'})
              if(result.icon) M.toast({html: result.icon, classes:'bg-danger'})
              if(result.message) M.toast({html: result.message, classes:'bg-danger'})
            }
            
          },
          (error) => {
            console.log(error)
          }
        );  
    
  }

  // Change Handler While Udating the Data
  const changeHandler = (evt)=>{
    const value = evt.target.value;
    const name = evt.target.name
    setData({...data, [name]:value})
  }

  // Get Data From Database
  useEffect(() => {
    fetch("/admin/allCategory", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
      }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if(result.success){
            setIsLoaded(true);
            setAllCategory(result.data || []);
          }else{
            M.toast({html: result.message, classes:'bg-danger'})
          }
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  }, [isAdded, isUpdated, isDeleted]);

  // Return function
  return (
    <div className="page-wrapper">
      <div className={"container-fluid"}>
        {/* Bread crumb and right sidebar toggle */}
        <div className="row page-titles">
          <div className="col-md-5 col-8 align-self-center">
            <h3 className="text-themecolor m-b-0 m-t-0">Category</h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Admin</Link>
              </li>
              <li className="breadcrumb-item active">Category</li>
            </ol>
          </div>
        </div>
        {/* End Bread crumb and right sidebar toggle */}
        <div className={"row"}>
          <div className={"col-md-8"}>
            <div className={"card mb-0 mt-2 border-0 rounded-0"}>
              <div className={"card-body pb-0 pt-2"}>
                <div>
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-info float-right rounded-0"
                    data-toggle="modal"
                    data-target="#addCategoryModel"
                  >
                    <span className={"fas fa-plus"}></span> Category
                  </button>
                </div>
              </div>
            </div>
            <div className="card border-0 rounded-0 m-0 py-1">
              <div className="card-body py-0">
                <div className="">
                  <table
                    id="myTable2"
                    className="table table-bordered table-striped my-0"
                  >
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Icon</th>
                        <th>Created Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isLoaded &&
                        <tr>
                          <td colSpan={5}>Loading....</td>
                        </tr> 
                      }

                      {allCategory.map((result, index)=>{
                          return(
                            <tr key={result._id}>
                            <td> {result.title} </td>
                            
                            <td> <Link to={`/admin/category/${result.slug}`} className={'btn btn-success rounded-0'}> <span className={'fas fa-paper-plane'}></span> {result.slug} </Link> </td>
                            <td> <i className={`${result.icon} h2 text-danger`}></i> </td>
                            <td> {result.created_date} </td>
                            <td>{result.status? 'Active': "Disabled"}</td>
                            <td>
                              <div className="btn-group btn-group-xs" role="group">
                                <button
                                  type="button"
                                  className="btn btn-info footable-edit rounded-0"
                                  data-toggle="modal"
                                  data-target="#updateCategoryModel"
                                  onClick={()=>updateState(result)}
                                >
                                  <span
                                    className="fas fa-pencil-alt"
                                    aria-hidden="true"
                                  ></span>
                                </button>
                                <button
                                  type="button"
                                  className="ml-2 btn btn-danger footable-delete rounded-0"
                                  data-toggle="modal"
                                  data-target="#deleteCategoryModel"
                                  onClick={(evt)=> setDeleteId(result._id)}
                                >
                                  <span
                                    className="fas fa-trash-alt"
                                    aria-hidden="true"
                                  ></span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          )
                        })
                      
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -- Model Designing -- */}
        <div>
          {/* -- Add Modal -- */}
          <div className="modal fade" id="addCategoryModel">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-0">
                <div className="modal-body">
                  <h4>Add Category</h4>
                  <form onSubmit={submitHandler} className="form-horizontal form-material">
                    <div className={"form-group mb-3"}>
                      <input
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                        className="form-control"
                        placeholder={"Title Here!"}
                      />
                    </div>
                    <div className={"form-group mb-3"}>
                      <input
                        type="text"
                        onChange={(evt)=>setslug(evt.target.value)}
                        value={slug}
                        id={'slug'}
                        className="form-control"
                        placeholder={"Slug Here!!"}
                      />
                    </div>

                    <div className={"form-group mb-3"}>
                      <input
                        type="text"
                        onChange={(evt)=>seticon(evt.target.value)}
                        value={icon}
                        id={'icon'}
                        className="form-control"
                        placeholder={"Fontawesome Icon Here!!"}
                      />
                    </div>

                    <div className={"form-group mb-3"}>
                      <select className="form-control" onChange={(evt)=>{setstatus(evt.target.value)}}>
                        <option value={"Active"}> Active </option>
                        <option value={"Disable"}> Disable </option>
                      </select>
                    </div>

                    <div className={"form-group"}>
                      <button
                        className="btn btn-info rounded-0"
                        type={"submit"}
                      >
                        Add
                      </button>
                      <button
                        className="btn btn-secondary rounded-0 ml-2"
                        data-dismiss="modal"
                        id={"closeAddCategoryButton"}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* -- Update Modal -- */}
          <div
            className="modal fade"
            id="updateCategoryModel"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addCategoryModelLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-0">
                <div className="modal-body">
                  <h4>Update Category</h4>
                  <form onSubmit={updateSubmitHandler} className="form-horizontal form-material">
                    <div className={"form-group my-3"}>
                      <input
                        type="text"
                        name={"title"}
                        onChange={changeHandler}
                        className="form-control"
                        value={data.title}
                        placeholder={"Title Here!"}
                      />
                    </div>
                    <div className={"form-group"}>
                      <input
                        type="text"
                        name={"slug"}
                        value={data.slug}
                        onChange={changeHandler}
                        className="form-control"
                        placeholder={"Slug Here!!"}
                      />
                    </div>
                    <div className={"form-group"}>
                      <input
                        type="text"
                        name={"icon"}
                        value={data.icon || ''}
                        onChange={changeHandler}
                        className="form-control"
                        placeholder={"FontAwesome Icon Here!!"}
                      />
                    </div>

                    <div className={"form-group"}>
                      <select className="form-control" name={"status"} onChange={changeHandler}>
                        <option value={true}> Active </option>
                        <option value={false}> Disable </option>
                      </select>
                    </div>

                    <div className={"form-group"}>
                      <button
                        className="btn btn-info rounded-0"
                        type={"submit"}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-secondary rounded-0 ml-2"
                        data-dismiss="modal"
                        id={'closeUpdateMOdelButton'}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* -- Delete Modal -- */}
          <div
            className="modal fade"
            id="deleteCategoryModel"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addCategoryModelLabel"
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
                    When you delete the category all the post is also deleted
                    connected with this category
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
                      id={"closeDeleteModelButton"}
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

export default Category;
