import { TaskFormModalProps } from "@/models/task.model";
import { addTaskService, updateTaskService } from "@/services/taskService";
import { useEffect, useState } from "react";

export default function TaskForm({ isOpen, onClose, mode, task }: TaskFormModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      console.log('taskform', task);
      setTitle(task.title);
      setDescription(task.description || "");
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description });
    if (mode === "create") {      
      createTask();
    } else if (mode === "update") {
      updateTask();
    }
    onClose();
  };

  const createTask = () => {
    addTaskService({ title, description, completed: false });
  };

  const updateTask = () => {
    if (task) {
      updateTaskService(task._id!, { ...task, title, description });
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-xs md:text-sm">
      <div className="bg-white p-6 rounded-md w-3/4 max-w-md">
        <h2 className="text-base md:text-xl font-bold mb-4">
          {mode === "create" ? "Crear tarea" : "Editar tarea"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-2 text-sm md:text-base">
              Título
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded p-2 text-xs md:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-bold mb-2 text-sm md:text-base">
              Descripción
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded p-2 text-xs md:text-sm"
            ></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-peach text-white font-bold py-2 px-4 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-gray-green text-white font-bold py-2 px-4 rounded"
            >
              {mode === "update" ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
