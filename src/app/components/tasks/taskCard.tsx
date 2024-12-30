import { ITask } from "@/models/task.model";
import { useState } from "react";
import { deleteTaskService, updateTaskService } from "@/services/taskService";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/taskModalSlice";

export default function TaskCard({task}: {task: ITask}) {
  const [completed, setCompleted] = useState(task.completed);
  const distpatch = useDispatch();

  const handleToggleCompleted = async () => {
    try {
      await updateTaskService(task._id!, { completed: !completed });
      setCompleted(!completed);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await deleteTaskService(task._id!);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTask = () => {
    distpatch(openModal({ mode: "update", task }));
  };

  const buttonClass = completed ? "bg-gray-green" : "bg-yellow text-white";
  console.log('task', task);
  return (
    <div className="bg-light-gray p-2 md:p-3 rounded-md text-xs md:text-base">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center align-start">
          <h2 className="font-bold">{task.title}</h2>
          <p className="text-sm md:text-base text-gray-500">{task.description}</p>
          <p className="text-[8px] md:text-sm text-gray-500 text-start">{new Date(task.createdAt).toLocaleString()}</p>
        </div>
        <div className="shrink">
          <button
            onClick={handleToggleCompleted}
            className={buttonClass + " my-auto mr-0 text-white font-bold p-2 rounded flex items-center justify-center align-center scale-75 md:scale-100"}
          >
            {completed ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        <button
          className="bg-gray-green text-white font-bold py-1 px-2 md:px-2 rounded text-[8px]"
          onClick={handleEditTask}
        >
          Editar
        </button>
        <button className="bg-peach text-white font-bold py-1 px-2 md:px-2 rounded text-[8px]" onClick={handleDeleteTask}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

