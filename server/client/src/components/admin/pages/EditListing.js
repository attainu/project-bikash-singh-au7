import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import M from "materialize-css";

function EditListing(props) {
  const history = useHistory()
  const {match} = props
  const slug = match.params.slug
  
  // State Variable
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [business, setBusiness] = useState({})
  const [listing, setListing] = useState({})
  const [coverIamge, setCoverImage] = useState("https://bit.ly/30qwoBZ");
  const [logoImage, setLogoImage] = useState("https://bit.ly/3kPLfxF");
  const [category, setCategory] = useState([]);

  // Change Handler
  const changeHandler = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setListing({ ...listing, [name]: value });
  };

  const titleChangeHandler = (evt) => {
    const value = evt.target.value;
    setTitle(value);
    setListing({ ...listing, slug: value.toLowerCase().replace(/ /gi, "-"), 'title': value });
  };

  // Cover Iamege Change
  const onCoverChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  // Cover Iamege Change
  const onLogoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setLogoImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  // Submit Handler
  const submitHandler = (evt) => {
    evt.preventDefault();
    fetch("/admin/updateBusiness", {
      method: "PUT",
      body: JSON.stringify(listing),
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
            history.goBack()
          } else {
            if(result.title) M.toast({ html: result.title, classes: "bg-danger" });
            if(result.slug) M.toast({ html: result.slug, classes: "bg-danger" });
            if(result.category) M.toast({ html: result.category, classes: "bg-danger" });
            if(result.mobile) M.toast({ html: result.mobile, classes: "bg-danger" });
            if(result.website) M.toast({ html: result.website, classes: "bg-danger" });
            if(result.facebook) M.toast({ html: result.facebook, classes: "bg-danger" });
            if(result.twitter) M.toast({ html: result.twitter, classes: "bg-danger" });
            if(result.instagram) M.toast({ html: result.instagram, classes: "bg-danger" });
            if(result.linkedin) M.toast({ html: result.linkedin, classes: "bg-danger" });
            if(result.youtube) M.toast({ html: result.youtube, classes: "bg-danger" });
            if(result.description) M.toast({ html: result.description, classes: "bg-danger" });
            if(result.email) M.toast({ html: result.email, classes: "bg-danger" });
            if(result.tags) M.toast({ html: result.tags, classes: "bg-danger" });
            if(result.coverImage) M.toast({ html: result.coverImage, classes: "bg-danger" });
            if(result.logoImage) M.toast({ html: result.logoImage, classes: "bg-danger" });
            if(result.address) M.toast({ html: result.address, classes: "bg-danger" });
            if(result.state) M.toast({ html: result.state, classes: "bg-danger" });
            if(result.city) M.toast({ html: result.city, classes: "bg-danger" });
            if(result.pinCode) M.toast({ html: result.pinCode, classes: "bg-danger" });
            if(result.user) M.toast({ html: result.user, classes: "bg-danger" });
            if(result.status) M.toast({ html: result.status, classes: "bg-danger" });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Use Effect
  useEffect(() => {
    // Fetch All Category
    fetch("/user/allCategory", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt_user_token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            setCategory(result.data || []);
          } else {
            M.toast({ html: result.message, classes: "bg-danger" });
          }
        },
        (error) => {
          console.log(error);
        }
      );

    // Fetch Business
    fetch("/user/getBusinessAcdSlug/"+slug, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt_user_token")}`,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.success) {
                setListing(result.data);
                setDescription(result.data.description)
                setTitle(result.data.title)
            } else {
              M.toast({ html: result.message, classes: "bg-danger" });
            }
          },
          (error) => {
            console.log(error);
          }
        );
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        {/* <!-- ============================================================== --> */}
        {/* <!-- Bread crumb and right sidebar toggle --> */}
        {/* <!-- ============================================================== --> */}
        <div className="row page-titles">
          <div className="col-md-5 col-8 align-self-center">
            <h3 className="text-themecolor">Update Business</h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">editListing</li>
            </ol>
          </div>
        </div>

        {/* Listing Form */}
        <div className="row">
          <div className={"col-md-10 mx-auto"}>
            <form
              onSubmit={submitHandler}
              
              className="form-horizontal form-material"
            >
              {/* Business Details */}
              <div className={"row shadow-sm bg-white py-3"}>
                <div className="col-md-12">
                  <h3 className={"my-3 text-info"}>Business Details</h3>
                </div>
                <div className={"form-group col-md-6"}>
                  <input
                    type="text"
                    value={title}
                    onChange={titleChangeHandler}
                    name={"title"}
                    className="form-control"
                    placeholder={"Business Title"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="text"
                    value={listing.slug}
                    onChange={changeHandler}
                    name={"slug"}
                    className="form-control"
                    placeholder={"Slug Here"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <select
                    className={"form-control"}
                    name={"category"}
                    onChange={changeHandler}
                  >
                    <option value={""}>Select Your Business Category</option>
                    {category.map((value, index) => {
                      return (
                        <option key={index} value={value._id}>
                          
                          {value.title}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="text"
                    value={listing.mobile}
                    onChange={changeHandler}
                    name={"mobile"}
                    className="form-control"
                    placeholder={"Mobile number"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="url"
                    value={listing.website}
                    onChange={changeHandler}
                    name={"website"}
                    className="form-control"
                    placeholder={"Write your website address"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <select
                    className={"form-control"}
                    name={"status"}
                    onChange={changeHandler}
                  >
                    <option value={''}>Select Status</option>
                    <option value={true}>Active</option>
                    <option value={false}>Disabled</option>
                    
                  </select>
                </div>
              </div>

              {/* Social Media Addresses */}
              <div className={"row shadow-sm bg-white mt-4 py-3"}>
                <div className="col-md-12">
                  <h3 className={"my-3 text-info"}>Social Media Addresses</h3>
                </div>
                <div className={"form-group col-md-6"}>
                  <input
                    type="url"
                    value={listing.facebook}
                    onChange={changeHandler}
                    name={"facebook"}
                    className="form-control"
                    placeholder={"Facebook URL"}
                  />
                </div>
                <div className={"form-group col-md-6"}>
                  <input
                    type="url"
                    value={listing.twitter}
                    onChange={changeHandler}
                    name={"twitter"}
                    className="form-control"
                    placeholder={"Twitter URL"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="url"
                    value={listing.instagram}
                    onChange={changeHandler}
                    name={"instagram"}
                    className="form-control"
                    placeholder={"Instagram URL"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="url"
                    value={listing.linkedin}
                    onChange={changeHandler}
                    name={"linkedin"}
                    className="form-control"
                    placeholder={"Linkedin URL"}
                  />
                </div>
                <div className={"form-group col-md-6"}>
                  <input
                    type="url"
                    value={listing.youtube}
                    onChange={changeHandler}
                    name={"youtube"}
                    className="form-control"
                    placeholder={"Youtube URL"}
                  />
                </div>
              </div>

              {/* Your Business Description */}
              <div className={"row shadow-sm bg-white mt-3 py-3"}>
                <div className="col-md-12">
                  <h3 className={"my-3 text-info"}>
                    Your Business Description
                  </h3>
                </div>
                <div className={"form-group col-md-12"}>
                  <CKEditor
                    editor={ClassicEditor}
                    style={{ height: "100px" }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setDescription(data);
                    }}
                    data={description}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="logoImage"
                    type="logoImage"
                    value={listing.email}
                    onChange={changeHandler}
                    name={"email"}
                    className="form-control"
                    placeholder={"Contact Email"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="text"
                    value={listing.tags}
                    onChange={changeHandler}
                    name={"tags"}
                    className="form-control"
                    placeholder={"Business Listing Keywords / Tags"}
                  />
                </div>

                <div className={"form-group col-md-12"}>
                  <label className={"mb-2"}>Select Cover Image</label>
                  <input
                    type="file"
                    onChange={onCoverChange}
                    className="form-control"
                  />
                </div>
                <div className={"form-group col-md-12"}>
                  <img
                    style={{ height: "400px", width: "100%" }}
                    src={coverIamge}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <label className={"mb-2"}>Select Brand Logo</label>
                  <input
                    type="file"
                    onChange={onLogoChange}
                    className="form-control"
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <img
                    style={{
                      height: "140px",
                      width: "140px",
                      borderRadius: "100%",
                      border: "1px solid #5a5a5a",
                    }}
                    src={logoImage}
                  />
                </div>
              </div>

              {/* Business Addresses */}
              <div className={"row shadow-sm bg-white mt-4 py-3"}>
                <div className="col-md-12">
                  <h3 className={"my-3 text-info"}>Business Address</h3>
                </div>
                <div className={"form-group col-md-6"}>
                  <input
                    type="text"
                    value={listing.address}
                    onChange={changeHandler}
                    name={"address"}
                    className="form-control"
                    placeholder={"Business Address"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="text"
                    value={listing.state}
                    onChange={changeHandler}
                    name={"state"}
                    className="form-control"
                    placeholder={"Business State"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="text"
                    value={listing.city}
                    onChange={changeHandler}
                    name={"city"}
                    className="form-control"
                    placeholder={"Business City"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <input
                    type="number"
                    value={listing.pinCode}
                    onChange={changeHandler}
                    name={"pinCode"}
                    className="form-control"
                    placeholder={"Business Pin Code"}
                  />
                </div>

                <div className={"form-group col-md-6"}>
                  <button className={"btn btn-info rounded-0 px-3 py-2"}>
                    Submit Listing
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditListing;
