// import React, { useState, useEffect } from "react";
// import Sider from "./Sider";
// import Header from "./Header";
// import "../assests/css/project_management.css";
// import { AiOutlineAlert } from "react-icons/ai";
// import { MdDoNotDisturb } from "react-icons/md";
// import { FaFileInvoiceDollar } from "react-icons/fa6";
// import { GiPiggyBank } from "react-icons/gi";

// // Simulating API call to fetch tasks
// const fetchTasks = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         todo: [
//           { id: 1, name: "Task 1" },
//           { id: 2, name: "Task 2" },
//         ],
//         work: [{ id: 3, name: "Task 3" }],
//         qa: [{ id: 4, name: "Task 4" }],
//         done: [{ id: 5, name: "Task 5" }],
//       });
//     }, 1000); // Simulating API response delay
//   });
// };

// const ProjectManagementTool = () => {
//   // const [stages, setStages] = useState({
//   //   todo: [],
//   //   work: [],
//   //   qa: [],
//   //   done: [],
//   // });

//   // const [draggedItem, setDraggedItem] = useState(null);
//   // const [draggedFromStage, setDraggedFromStage] = useState(null);

//   // useEffect(() => {
//   //   // Fetch tasks from the simulated API
//   //   fetchTasks().then((data) => {
//   //     setStages(data);
//   //   });
//   // }, []);

//   // const handleDragStart = (item, stage) => {
//   //   setDraggedItem(item);
//   //   setDraggedFromStage(stage);
//   // };

//   // const handleDragOver = (e) => {
//   //   e.preventDefault(); // Allows dropping
//   // };

//   // const handleDrop = (e, targetStage) => {
//   //   if (draggedItem) {
//   //     const newStages = { ...stages };
//   //     // Remove item from the original stage
//   //     newStages[draggedFromStage] = newStages[draggedFromStage].filter(
//   //       (task) => task.id !== draggedItem.id
//   //     );
//   //     // Add item to the target stage
//   //     newStages[targetStage].push(draggedItem);

//   //     setStages(newStages);
//   //     setDraggedItem(null);
//   //     setDraggedFromStage(null);
//   //   }
//   // };

//   // const handleDragEnd = () => {
//   //   setDraggedItem(null);
//   //   setDraggedFromStage(null);
//   // };

//   // // Render function for each stage
//   // const renderStage = (stageName, tasks) => {

//   //   return (
//   //     <div
//   //       className=" col stage drag-contain  "
//   //       onDragOver={handleDragOver}
//   //       onDrop={(e) => handleDrop(e, stageName)}
//   //     >

//   //       <div>
//   //         {tasks.length === 0 ? (
//   //           <p>No tasks available</p>
//   //         ) : (
//   //           tasks.map((task) => (
//   //             <div
//   //               className="inside-drag-box"
//   //               key={task.id}
//   //               draggable
//   //               onDragStart={() => handleDragStart(task, stageName)}
//   //               onDragEnd={handleDragEnd}
//   //             >
//   //               {task.name}
//   //             </div>
//   //           ))
//   //         )}
//   //       </div>
//   //     </div>
//   //   );
//   // };

//   const App = () => {
//     const [stages, setStages] = useState({
//       todo: [],
//       work: [],
//       qa: [],
//       done: [],
//     });

//     const [draggedItem, setDraggedItem] = useState(null);
//     const [draggedFromStage, setDraggedFromStage] = useState(null);

//     const navigate = useNavigate();

//     useEffect(() => {
//       // Fetch tasks from the simulated API
//       fetchTasks().then((data) => {
//         setStages(data);
//       });
//     }, []); // Empty array ensures this runs only once after the first render

//     useEffect(() => {
//       // Check if all tasks are in the "done" stage
//       const allTasksDone =
//         stages.todo.length === 0 &&
//         stages.work.length === 0 &&
//         stages.qa.length === 0 &&
//         stages.done.length > 0;

//       if (allTasksDone) {
//         navigate("/next-page"); // Replace '/next-page' with your desired route
//       }
//     }, [stages, navigate]);

//     const handleDragStart = (item, stage) => {
//       setDraggedItem(item);
//       setDraggedFromStage(stage);
//     };

//     const handleDragOver = (e) => {
//       e.preventDefault(); // Allows dropping
//     };

//     const handleDrop = (e, targetStage) => {
//       if (draggedItem) {
//         const newStages = { ...stages };
//         // Remove item from the original stage
//         newStages[draggedFromStage] = newStages[draggedFromStage].filter(
//           (task) => task.id !== draggedItem.id
//         );
//         // Add item to the target stage
//         newStages[targetStage].push(draggedItem);

//         setStages(newStages);
//         setDraggedItem(null);
//         setDraggedFromStage(null);
//       }
//     };

//     const handleDragEnd = () => {
//       setDraggedItem(null);
//       setDraggedFromStage(null);
//     };

//     const renderStage = (stageName, tasks) => {
//       return (
//         <div
//           className="col stage drag-contain"
//           onDragOver={handleDragOver}
//           onDrop={(e) => handleDrop(e, stageName)}
//         >
//           <div>
//             {tasks.length === 0 ? (
//               <p>No tasks available</p>
//             ) : (
//               tasks.map((task) => (
//                 <div
//                   className="inside-drag-box"
//                   key={task.id}
//                   draggable
//                   onDragStart={() => handleDragStart(task, stageName)}
//                   onDragEnd={handleDragEnd}
//                 >
//                   {task.name}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       );
//     };

//   return (
//     <>
//       <section className="main">
//         <div className="row mt-4 w-100">
//           <div className="col-1 d-flex justify-content-center">
//             <Sider />
//           </div>
//           <div className="col-11">
//             <div className="col-12">
//               <Header />
//             </div>
//             <div className="col-12 pt-1 mt-3 project-manage w-100">
//               <section className="col-12">
//                 <div className="row px-3">
//                   <div className="col-12 mt-4">
//                     <p className="heading-entr">Project Management</p>
//                   </div>
//                 </div>
//                 <div className="row px-5 py-3 gap-3">
//                   {/* Task Count Boxes */}
//                   <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
//                     <div className="task-box align-items-center pt-3">
//                       <AiOutlineAlert className="project-icon" />
//                     </div>
//                     <div className="align-items-center">
//                       <p className="project-writer pt-2">
//                         Emergency work count
//                       </p>
//                       <div className="h4">5</div>
//                     </div>
//                   </div>
//                   <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
//                     <div className="task-box1 align-items-center pt-1">
//                       <MdDoNotDisturb className="project-icon1 mt-3" />
//                     </div>
//                     <div className="align-items-center">
//                       <p className="project-writer pt-2">
//                         Emergency work count
//                       </p>
//                       <div className="h4">825</div>
//                     </div>
//                   </div>
//                   <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
//                     <div className="task-box2 align-items-center pt-1">
//                       <FaFileInvoiceDollar className="project-icon2 mt-3" />
//                     </div>
//                     <div className="align-items-center">
//                       <p className="project-writer pt-2">
//                         Emergency work count
//                       </p>
//                       <div className="h4">502</div>
//                     </div>
//                   </div>
//                   <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
//                     <div className="task-box3 align-items-center pt-3">
//                       <GiPiggyBank className="project-icon3" />
//                     </div>
//                     <div className="align-items-center">
//                       <p className="project-writer pt-2">
//                         Emergency work count
//                       </p>
//                       <div className="h4">5</div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//               <section className="col-12">
//                 {/* Stage Rendering */}
//                 <div className="d-flex flex-wrap justify-content-between">
//                   <div className=" col bg-black ">
//                     <div className="stage-heading">
//                       <p>TODo</p>

//                     </div>
//                     {renderStage("todo", stages.todo)}
//                   </div>

//                   {renderStage("work", stages.work)}
//                   {renderStage("qa", stages.qa)}
//                   {renderStage("done", stages.done)}
//                 </div>
//               </section>
//              {/* todo list */}

//   return (
//     <section className="col-12">
//       <div className="d-flex flex-wrap justify-content-between">
//         <div className="col bg-black">
//           <div className="stage-heading">
//             <p>TODO</p>
//           </div>
//           {renderStage("todo", stages.todo)}
//         </div>
//         {renderStage("work", stages.work)}
//         {renderStage("qa", stages.qa)}
//         {renderStage("done", stages.done)}
//       </div>
//     </section>

//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// };

// export default ProjectManagementTool;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sider from "./Sider";
// import Header from "./Header";
// import "../assests/css/project_management.css";
// import { AiOutlineAlert } from "react-icons/ai";
// import { MdDoNotDisturb } from "react-icons/md";
// import { FaFileInvoiceDollar } from "react-icons/fa6";
// import { GiPiggyBank } from "react-icons/gi";

// // Simulating API call to fetch tasks
// const fetchTasks = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         todo: [
//           { id: 1, name: "Task 1" },
//           { id: 2, name: "Task 2" },
//         ],
//         work: [{ id: 3, name: "Task 3" }],
//         qa: [{ id: 4, name: "Task 4" }],
//         done: [{ id: 5, name: "Task 5" }],
//       });
//     }, 1000); // Simulating API response delay
//   });
// };

// const ProjectManagementTool = () => {
//   const [stages, setStages] = useState({
//     todo: [],
//     work: [],
//     qa: [],
//     done: [],
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch tasks from the simulated API
//     fetchTasks().then((data) => {
//       setStages(data);
//     });
//   }, []);

//   useEffect(() => {
//     // Check if all tasks are in the "done" stage
//     const allTasksDone =
//       stages.todo.length === 0 &&
//       stages.work.length === 0 &&
//       stages.qa.length === 0 &&
//       stages.done.length > 0;

//     if (allTasksDone) {
//       navigate("/next-page"); // Navigate to the next page when all tasks are done
//     }
//   }, [stages, navigate]);

//   // Function to move a task to the next stage
//   const moveTask = (task, currentStage, nextStage) => {
//     const updatedStages = { ...stages };
//     // Remove task from the current stage
//     updatedStages[currentStage] = updatedStages[currentStage].filter(
//       (t) => t.id !== task.id
//     );
//     // Add task to the next stage
//     updatedStages[nextStage].push(task);
//     setStages(updatedStages);
//   };

//   const renderStage = (stageName, tasks, nextStage) => (
//     <div className="col stage">
//       <div className="stage-heading">
//         <p>{stageName.toUpperCase()}</p>
//       </div>
//       <div>
//         {tasks.length === 0 ? (
//           <p>No tasks available</p>
//         ) : (
//           tasks.map((task) => (
//             <div className="inside-drag-box" key={task.id}>
//               <p>{task.name}</p>
//               {nextStage && (
//                 <button
//                   className="btn btn-primary btn-sm"
//                   onClick={() => moveTask(task, stageName, nextStage)}
//                 >
//                   Move to {nextStage.toUpperCase()}
//                 </button>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <section className="main">
//         <div className="row mt-4 w-100">
//           <div className="col-1 d-flex justify-content-center">
//             <Sider />
//           </div>
//           <div className="col-11">
//             <Header />
//             <div className="col-12 pt-1 mt-3 project-manage w-100">
//               <section className="col-12">
//                 <div className="row px-3">
//                   <div className="col-12 mt-4">
//                     <p className="heading-entr">Project Management</p>
//                   </div>
//                 </div>
//                 {/* Task Count Boxes */}
//                 <div className="row px-5 py-3 gap-3">
//                   <TaskBox
//                     icon={<AiOutlineAlert />}
//                     text="Emergency work count"
//                     count={stages.todo.length}
//                   />
//                   <TaskBox
//                     icon={<MdDoNotDisturb />}
//                     text="In Progress count"
//                     count={stages.work.length}
//                   />
//                   <TaskBox
//                     icon={<FaFileInvoiceDollar />}
//                     text="Pending QA count"
//                     count={stages.qa.length}
//                   />
//                   <TaskBox
//                     icon={<GiPiggyBank />}
//                     text="Completed count"
//                     count={stages.done.length}
//                   />
//                 </div>
//               </section>
//               {/* Stage Rendering */}
//               <section className="col-12">
//                 <div className="d-flex flex-wrap justify-content-between">
//                   {renderStage("todo", stages.todo, "work")}
//                   {renderStage("work", stages.work, "qa")}
//                   {renderStage("qa", stages.qa, "done")}
//                   {renderStage("done", stages.done, null)} {/* No next stage */}
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// // TaskBox Component for Reusability
// const TaskBox = ({ icon, text, count }) => (
//   <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
//     <div className="task-box align-items-center pt-3">{icon}</div>
//     <div className="align-items-center">
//       <p className="project-writer pt-2">{text}</p>
//       <div className="h4">{count}</div>
//     </div>
//   </div>
// );

// export default ProjectManagementTool;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sider from "./Sider";
import Header from "./Header";
import "../assests/css/project_management.css";
import { AiOutlineAlert } from "react-icons/ai";
import { MdDoNotDisturb } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiPiggyBank } from "react-icons/gi";
import { Link } from "react-router-dom";
import Breadcrumbs from "../routes/Breadcrumbs";
const ProjectManagementTool = () => {

  return (
    <>
      <section className="main">
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11">
            <Header />
            <div className="col-12  mt-3 project-manage pb-3 w-100">
            <div className="pt-2 px-2 d-none d-md-block"><Breadcrumbs></Breadcrumbs></div>

              <section className="col-12">
                <div className="row px-3">
                

                
                  <div className="col-12 mt-4">
                    <p className="heading-entr">Project Management</p>
                  </div>
                </div>
                <div className="row px-5 py-3 gap-3">
                  {/* Task Count Boxes */}
                  <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
                    <div className="task-box align-items-center pt-3">
                      <AiOutlineAlert className="project-icon" />
                    </div>
                    <div className="align-items-center">
                      <p className="project-writer pt-2">
                        Emergency work count
                      </p>
                      <div className="h4">5</div>
                    </div>
                  </div>
                  <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
                    <div className="task-box1 align-items-center pt-1">
                      <MdDoNotDisturb className="project-icon1 mt-3" />
                    </div>
                    <div className="align-items-center">
                      <p className="project-writer pt-2">
                        Not Assgined Work Count
                      </p>
                      <div className="h4">825</div>
                    </div>
                  </div>
                  <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
                    <div className="task-box2 align-items-center pt-1">
                      <FaFileInvoiceDollar className="project-icon2 mt-3" />
                    </div>
                    <div className="align-items-center">
                      <p className="project-writer pt-2">
                        Project Delay Count
                      </p>
                      <div className="h4">502</div>
                    </div>
                  </div>
                  <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
                    <div className="task-box3 align-items-center pt-3">
                      <GiPiggyBank className="project-icon3" />
                    </div>
                    <div className="align-items-center">
                      <p className="project-writer pt-2">
                        Freelancer Payment count
                      </p>
                      <div className="h4">5</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="col-12 px-3  ">
                <div className="d-flex flex-wrap  p-3 wapper  ">
                  <div className="col  ">
                    <div className="project-todo d-flex gap-5 pb-2 m-1 ">
                      <div>TO DO</div>
                      <div className="project-todo-round ">2</div>
                    </div>
                    <div className="task-list ">
                      <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    
                  </div>
                  <div className="col ">
                  <div className="project-todo1 d-flex gap-5 pb-2 m-1 ">
                      <div>IN WORK</div>
                      <div className="project-todo-round ">2</div>
                    </div>
                    <div className="task-list ">
                    <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col ">
                  <div className="project-todo2 d-flex gap-5 pb-2 m-1 ">
                      <div>Reviews</div>
                      <div className="project-todo-round ">2</div>
                    </div>
                    <div className="task-list ">
                    <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col ">
                  <div className="project-todo3 d-flex gap-5 pb-2 m-1">
                      <div>Correction</div>
                      <div className="project-todo-round ">2</div>
                    </div>
                    <div className="task-list ">
                    <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col ">
                  <div className="project-todo4 d-flex gap-5 pb-2 m-1 ">
                      <div>COMPLETED</div>
                      <div className="project-todo-round ">2</div>
                    </div>
                    <div className="task-list ">
                    <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="project-view " className="text-decoration-none">
                        <div className=" task-details m-2 p-2">
                          <p className="m-0 task-name-todo">Rabina</p>
                          <p className="task-comments">
                            
                            lorem ipsum dolor sit amet, consectetur adip id
                            nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="task-thesis-head">
                              <p className="task-thesis">Manuscript</p>
                            </div>
                            <div className="task-thesis-head1">
                              <p className="task-thesis1">Writer</p>
                            </div>
                            <div className="task-thesis-head2">
                              <p className="task-thesis2">Completed</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectManagementTool;
