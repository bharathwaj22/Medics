import React, { useState, useEffect } from "react";
import Sider from "./Sider";
import Header from "./Header";
import "../assests/css/project_management.css";
import { AiOutlineAlert } from "react-icons/ai";
import { MdDoNotDisturb } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiPiggyBank } from "react-icons/gi";

// Simulating API call to fetch tasks
const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        todo: [
          { id: 1, name: "Task 1" },
          { id: 2, name: "Task 2" },
        ],
        work: [{ id: 3, name: "Task 3" }],
        qa: [{ id: 4, name: "Task 4" }],
        done: [{ id: 5, name: "Task 5" }],
      });
    }, 1000); // Simulating API response delay
  });
};

const ProjectManagementTool = () => {
  const [stages, setStages] = useState({
    todo: [],
    work: [],
    qa: [],
    done: [],
  });

  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedFromStage, setDraggedFromStage] = useState(null);

  useEffect(() => {
    // Fetch tasks from the simulated API
    fetchTasks().then((data) => {
      setStages(data);
    });
  }, []); // Empty array ensures this runs only once after the first render

  const handleDragStart = (item, stage) => {
    setDraggedItem(item);
    setDraggedFromStage(stage);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allows dropping
  };

  const handleDrop = (e, targetStage) => {
    if (draggedItem) {
      const newStages = { ...stages };
      // Remove item from the original stage
      newStages[draggedFromStage] = newStages[draggedFromStage].filter(
        (task) => task.id !== draggedItem.id
      );
      // Add item to the target stage
      newStages[targetStage].push(draggedItem);

      setStages(newStages);
      setDraggedItem(null);
      setDraggedFromStage(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedFromStage(null);
  };

  // Render function for each stage
  const renderStage = (stageName, tasks) => {
 
    
    
    return (
      <div
        className=" col stage drag-contain  "
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, stageName)}
      >
        
        <div>
          {tasks.length === 0 ? (
            <p>No tasks available</p>
          ) : (
            tasks.map((task) => (
              <div
                className="inside-drag-box"
                key={task.id}
                draggable
                onDragStart={() => handleDragStart(task, stageName)}
                onDragEnd={handleDragEnd}
              >
                {task.name}
              </div>
            ))
          )}
        </div>
      </div>
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
            <div className="col-12">
              <Header />
            </div>
            <div className="col-12 pt-1 mt-3 project-manage w-100">
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
                        Emergency work count
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
                        Emergency work count
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
                        Emergency work count
                      </p>
                      <div className="h4">5</div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="col-12">
                {/* Stage Rendering */}
                <div className="d-flex flex-wrap justify-content-between">
                  <div className=" col bg-black ">
                    <div className="stage-heading">
                      <p>TODo</p>

                    </div>
                    {renderStage("todo", stages.todo)}
                  </div>
                    
                  
                  {renderStage("work", stages.work)}
                  {renderStage("qa", stages.qa)}
                  {renderStage("done", stages.done)}
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
