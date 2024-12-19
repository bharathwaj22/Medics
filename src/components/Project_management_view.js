// import React from "react";

// import Sider from "../components/Sider";

// import Header from "../components/Header";
// import "..//assests/css/project-management-view.css";
// import Profile from "..//assests/images/profile.png";
// import Breadcrumbs from "../routes/Breadcrumbs";


// function Project_management_view() {

//   return (
//     <>
//       <section className="main">
//         <div className="row mt-4 w-100">
//           <div className="col-1 d-flex justify-content-center">
//             <Sider />
//           </div>
//           <div className="col-11">
//             <Header />
//             <div className="col-12  mt-3 project-manage-view pb-3 w-100">
//             <div className="pt-2 px-2 d-none d-md-block"><Breadcrumbs></Breadcrumbs></div>

//               <section className="col-12">
               
//                 <div className="row px-3">
               
//                   <div className="col-12 mt-4">
//                     <p className="heading-entr">Description</p>
//                   </div>
//                 </div>
//                 <div className="row px-3">
//                   <div className="col-12 col-md-6 float-start">
//                     <div className="d-flex gap-2">
//                       <div className="view-thesis">Thesis</div>
//                       <div className="view-present">Presentation</div>
//                     </div>
//                     <div className="col-12 mt-4">
//                       <p className="heading-entr">Project Title</p>
//                       <p>
//                         lorem100Lorem ipsum, or lipsum as it is sometimes known,
//                         is dummy text used in laying out print, graphic or web
//                         designs. The passage is attributed to an unknown
//                         typesetter in the 15th century who is thought to have
//                         scrambled parts of Cicero's De Finibus Bonorum et
//                         Malorum for use in a type specimen book. It usually
//                         begins with:
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-12 col-md-6 float-start">
//                     <div className="">
//                       <div className="d-flex gap-2 ">
//                         <p>Created by</p>
//                         <div className="  create-view  align-items-center d-flex gap-2 px-1">
//                           <img src={Profile} className="pro-view-img" alt="" />

//                           <p className="">Rabina</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Project_management_view;



import React, { useState } from "react";
import { PiCloudArrowUpLight } from "react-icons/pi"; // Import the file upload icon
import { RiDeleteBin6Line } from "react-icons/ri"; // Import the delete icon

const FileUploadComponent = () => {
  const [formData, setFormData] = useState({
    typeofwork: "",
    specificOption: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]); // Array to store the uploaded files with their option
  const [fileUploaded, setFileUploaded] = useState(false); // To track if a file is uploaded
  const [errors, setErrors] = useState({}); // For error handling (optional)

  const optionsMapping = {
    others: [{ value: "otherOption1", label: "Option 1" }, { value: "otherOption2", label: "Option 2" }],
    // Add other types of work and their corresponding options here
  };

  const handleFileChange1 = (event) => {
    const files = event.target.files; // Access the files

    if (files && files.length > 0) {
      setFileUploaded(true); // Indicate a file was uploaded

      // Process files and include the selected option value
      const fileArray = Array.from(files).map((file) => ({
        option: formData.specificOption, // The selected option value
        file: file, // The uploaded file
      }));

      // Update the uploadedFiles state with the new file data
      setUploadedFiles((prevFiles) => [...prevFiles, ...fileArray]);

      console.log("Uploaded Files Array:", [...uploadedFiles, ...fileArray]);
    } else {
      setFileUploaded(false); // No file uploaded
    }
  };

  const handleSpecificChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButtonClick = () => {
    // You can use this to add another file-entry pair when the button is clicked
    if (formData.specificOption && fileUploaded) {
      const newFileEntry = {
        option: formData.specificOption, // Add the specific option to the new entry
        file: uploadedFiles[uploadedFiles.length - 1].file, // Add the last uploaded file
      };

      // Add the new entry to the uploadedFiles state
      setUploadedFiles((prevFiles) => [...prevFiles, newFileEntry]);

      console.log("Updated Files Array after Add Button:", uploadedFiles);
      setFileUploaded(false); // Reset file upload state after adding
    }
  };

  const handleFileDelete1 = () => {
    setFileUploaded(false);
  };

  return (
    <div className="row mt-2 pt-3 p-3">
      <div className="col-12 col-md-4">
        <label className="statis-name">Select Document</label>
        {formData.typeofwork === "others" ? (
          <input
            type="text"
            className={`form-control ${errors.specificOption ? "error" : ""}`}
            name="specificOption"
            value={formData.specificOption}
            onChange={handleSpecificChange}
            placeholder="Enter Others Option"
            required
          />
        ) : (
          <select
            className={`form-select ${errors.specificOption ? "error" : ""}`}
            name="specificOption"
            value={formData.specificOption}
            onChange={handleSpecificChange}
            required
          >
            <option value="" disabled>
              Select a specific option
            </option>
            {optionsMapping[formData.typeofwork]?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="col-12 col-md-4">
        <label className="statis-name">File</label>
        <div
          className={`form-control d-flex justify-content-end ${errors.file ? "error" : ""}`}
        >
          <input
            type="file"
            id="fileupload"
            accept="file/*"
            className="file-upload-input"
            onChange={handleFileChange1}
          />
          {!fileUploaded && (
            <label htmlFor="fileupload" className="file-icon">
              <PiCloudArrowUpLight />
            </label>
          )}
          {fileUploaded && (
            <RiDeleteBin6Line className="file-del-icon" onClick={handleFileDelete1} />
          )}
        </div>
      </div>

      <div className="col d-flex justify-content-start py-3 mt-2">
        <button
          type="button"
          className="save-form-add"
          onClick={handleButtonClick}
        >
          Add +
        </button>
      </div>

      {/* Display uploaded files */}
      <div>
        <h4>Uploaded Files:</h4>
        <ul>
          {uploadedFiles.map((entry, index) => (
            <li key={index}>
              Option: {entry.option} - File: {entry.file.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUploadComponent;
