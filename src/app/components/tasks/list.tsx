import { ITask } from "@/models/task.model";
import { getAndDispatchTasksService } from "@/services/taskService";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/index";
import { openModal } from "@/store/taskModalSlice";
import TaskCard from "./taskCard";
import TaskForm from "./taskForm";
import { closeModal } from "@/store/taskModalSlice";

export default function TaskList() {
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const modalState = useSelector((state: RootState) => state.taskModal);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    getAndDispatchTasksService();
  }, []);

  useEffect(() => {
    switch (filter) {
      case 'completed':
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case 'pending':
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }, [filter, tasks]);

  const handleCreateTask = () => {
    dispatch(openModal({ mode: "create", task: undefined }));
  };

  return (
    <div>
      <div className="flex justify-between align-center text-sm md:text-xl py-2 px-4">
        <div className="my-auto text-base md:text-2xl">Mis tareas</div>
        <button
          onClick={handleCreateTask}
          className="bg-blue-gray text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="ml-2 hidden md:block text-sm">Crear nueva tarea</span>
        </button>
      </div>
      <div className="flex justify-center gap-4 flex-wrap mt-4 text-[8px] md:text-sm">
        <button
          className={`px-2 py-1 md:px-4 md:py-2 rounded ${filter === "" ? "bg-gray-green text-white" : "bg-white"}`}
          onClick={() => setFilter("")}
        >
          Todas
        </button>
        <button
          className={`px-2 py-1 md:px-4 md:py-2 rounded ${filter === "completed" ? "bg-gray-green text-white" : "bg-white"}`}
          onClick={() => setFilter("completed")}
        >
          Completadas
        </button>
        <button
          className={`px-2 py-1 md:px-4 md:py-2 rounded ${filter === "pending" ? "bg-gray-green text-white" : "bg-white"}`}
          onClick={() => setFilter("pending")}
        >
          Pendientes
        </button>
      </div>
      <hr className="my-4" />
      <div className="flex justify-center gap-4 flex-wrap mt-4">
        {filteredTasks.map((task: ITask) => (
          <div key={task._id}>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      {
        modalState.isOpen &&
          <TaskForm
            isOpen={modalState.isOpen}
            mode={modalState.mode}
            task={modalState.task}
            onClose={() => dispatch(closeModal())}
          />
      }
    </div>
  );
}
