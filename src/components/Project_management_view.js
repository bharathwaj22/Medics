import React, { useState } from "react";

import Sider from "../components/Sider";

import Header from "../components/Header";
import "..//assests/css/project-management-view.css";
import Profile from "..//assests/images/profile.png";
import Breadcrumbs from "../routes/Breadcrumbs";
import { IoMdAdd } from "react-icons/io";
import RichEditor from "../components/RichEditor.jsx";
import { IoMdClose } from "react-icons/io";

function Project_management_view() {
  // const [formData, setFormData1] = React.useState({
  //   commandbox: "",
  // });
  // const [editorContent, setEditorContent] = useState('');
  // const [isRejected, setIsRejected] = useState(false);

  // const setFormData = (content) => {
  //   setEditorContent(content ? String(content) : '');
  //   console.log("Editor content updated:", content);
  // };
  // const handleRejectSubmit = () => {
  //   if (editorContent.trim() === '') {
      
  //     setIsRejected(true);
  //   } else {
  //     setIsRejected(false);
  //     console.log('Rejected with content:', editorContent);
  //   }
  // };
  // const handleCommentChange = (newValue) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     commandbox: newValue, // Update only the commandbox property
  //   }));
  // };
  const [formData, setFormData] = useState({
    commandbox: "",
  });
  const [isRejected, setIsRejected] = useState(false);

  // This function updates the formData's commandbox property
  const handleEditorChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,           // Spread the previous state to keep other properties intact
      commandbox: content ? String(content) : ''  // Update the commandbox property
    }));

    console.log("Editor content updated:", content);  
  };

  const handleRejectSubmit = () => {
    console.log("Current commandbox content:", formData.commandbox);
  
    if (formData.commandbox.trim() === '') {
      setIsRejected(true);
      
    } else {
      setIsRejected(false);
      console.log('Rejected with content:', formData.commandbox); 
    }
  };
  const handleCommentChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      commandbox: newValue, 
      
    }));
  };
  
  const [mainProfiles, setMainProfiles] = useState([]);
  const [availableProfiles, setAvailableProfiles] = useState([
    { image: Profile, name: "Rabina" },
    { image: Profile, name: "John" },
    { image: Profile, name: "Alice" },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDiv = () => {
    setIsOpen((prev) => !prev);
  };

  const selectProfile = (profile) => {
    
    setMainProfiles((prev) => [...prev, profile]);
    setAvailableProfiles((prev) =>
      prev.filter((item) => item.name !== profile.name)
    );
    setIsOpen(false); // Close the "add-view-names" section
  };

  const deleteProfile = (profile) => {
    // Move profile from mainProfiles to availableProfiles
    setAvailableProfiles((prev) => [...prev, profile]);
    setMainProfiles((prev) =>
      prev.filter((item) => item.name !== profile.name)
    );
  };
  return (
    <>
      <section className="main">
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11">
            <Header />
            <div className="col-12  mt-3 project-manage-view pb-3 w-100">
              <div className="pt-2 px-2 d-none d-md-block">
                <Breadcrumbs></Breadcrumbs>
              </div>

              <section className="col-12 pb-5">
                <div className="row px-3">
                  <div className="col-12 mt-4">
                    <p className="heading-entr">Description</p>
                  </div>
                </div>
                <div className="row px-3">
                  <div className="col-12 col-md-6 float-start">
                    <div className="d-flex gap-2">
                      <div className="view-thesis">Thesis</div>
                      <div className="view-present">Presentation</div>
                    </div>
                    <div className="col-12 mt-4">
                      <p className="heading-entr">Project Title</p>
                      <p className="view-project-title" >
                        lorem100Lorem ipsum, or lipsum as it is sometimes known,
                        is dummy text used in laying out print, graphic or web
                        designs. The passage is attributed to an unknown
                        typesetter in the 15th century who is thought to have
                        scrambled parts of Cicero's De Finibus Bonorum et
                        Malorum for use in a type specimen book. It usually
                        begins with:
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mt-5 col-md-6 float-start">
                    <div className="">
                      <div className="d-flex gap-2 ">
                        <p className="created-by pt-2">Created by</p>
                        <div className="create-view d-flex align-items-center gap-2 px-1 mx-2">
                          <img src={Profile} className="pro-view-img" alt="" />
                          <p className="view-names text-center ">Rabina</p>
                        </div>
                      </div>
                      {/*  */}
                      {/* <div className="d-flex gap-2 ">
                        <p className="created-by pt-2">Assigned To</p>
                        <div className="d-flex gap-2 flex-wrap">
                          <div className="create-view d-flex align-items-center gap-2 px-1 mx-1">
                            <img
                              src={Profile}
                              className="pro-view-img"
                              alt=""
                            />
                            <p className="view-names text-center ">Rabina</p>
                          </div>
                          
                          {profiles.map((profile, index) => (
                            <div
                              key={index}
                              className="create-view d-flex align-items-center gap-2 px-1 mx-1"
                            >
                              <img
                                src={profile.image}
                                className="pro-view-img"
                                alt={profile.name}
                              />
                              <p className="view-names text-center">
                                {profile.name}
                              </p>
                            </div>
                          ))}

                          <div className="view-page-icon" onClick={toggleDiv}>
                            <IoMdAdd className="view-page-icon1 mx-1" />
                          </div>
                        </div>

                        {isOpen && (
                          <div className="add-view-names">
                            <div className="create-view1 d-flex align-items-center gap-2 px-1 mx-1 pt-1"
                            onClick={addProfile}>
                              <img
                                src={Profile}
                                className="pro-view-img"
                                alt=""
                              />
                              <p className="view-names text-center ">profile</p>

                            </div>
                          </div>
                        )}
                      </div> */}
                      <div className="d-flex gap-2">
                        <p className="created-by pt-2">Assigned To</p>

                        {/* Main Profiles Section */}
                        <div className="d-flex gap-2 flex-wrap">
                          {mainProfiles.map((profile, index) => (
                            <div
                              key={index}
                              className="create-view d-flex align-items-center gap-2 px-1 mx-1"
                            >
                              <img
                                src={profile.image}
                                className="pro-view-img"
                                alt={profile.name}
                              />
                              <p className="view-names text-center">
                                {profile.name}
                              </p>
                              <IoMdClose
                                className="delete-icon"
                                onClick={() => deleteProfile(profile)}
                              />
                            </div>
                          ))}

                          {/* Add Icon */}
                          <div className="view-page-icon mx-1" onClick={toggleDiv}>
                            <IoMdAdd className="view-page-icon1 mx-1" />
                          </div>
                        </div>

                        {/* Add View Names Section */}
                        {isOpen && (
                          <div className="add-view-names">
                            {availableProfiles.map((profile, index) => (
                              <div
                                key={index}
                                className="create-view d-flex align-items-center gap-2 px-1 mx-1  mt-1"
                                onClick={() => selectProfile(profile)}
                              >
                                <img
                                  src={profile.image}
                                  className="pro-view-img"
                                  alt={profile.name}
                                />
                                <p className="view-names text-center">
                                  {profile.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/*  */}
                      <div className="d-flex gap-2 align-items-center">
                        <p className="created-by mb-0">Time line</p>
                        <p className="view-names mx-4 mb-0">
                          Jan 3, 2024 to Apr 24, 2024
                        </p>
                      </div>
                      {/*  */}
                      <div className="d-flex gap-5 align-items-center mt-2">
                        <p className="created-by mb-0">Priority</p>
                        <p className="view-names  mb-0">Important</p>
                      </div>
                      {/*  */}
                      <div className="d-flex gap-5 align-items-center mt-2">
                        <p className="created-by mb-0">Status</p>
                        <p className="view-names mx-1 mb-0">TO DO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row px-3">
                  <div className="col-12 mt-4">
                    <p className="heading-entr">Activity</p>
                  </div>
                  </div>
                  <div className="row px-5">
                  <div className="col-12 col-md-6 pt-4 box-line">
        <RichEditor setFormData={handleEditorChange} />
        {isRejected && <p className="warning-text">Please fill out the command box before rejecting.</p>}
      </div>
                </div>
                <div className="row px-3 pt-5">
                  <div className="col d-flex align-items-center gap-3">
                    <img src={Profile} className="" alt="" />
                    <div className="view-names1  ">Rabina</div>
                    <div className=" created-by ">5min</div>
                  </div>
                  <div className="col-12">
                    <p className="view-project-title  mx-5 pt-2">
                      lorem100Lorem ipsum, or lipsum as it is sometimes known,
                      is dummy text used in laying out print, graphic or web
                      designs.
                    </p>
                  </div>
                  <div className="col-12 d-flex justify-content-end gap-3">
                  <button className="view-rej" onClick={handleRejectSubmit}>Rejected</button>
                  <button className="view-accept">Accepted</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project_management_view;
