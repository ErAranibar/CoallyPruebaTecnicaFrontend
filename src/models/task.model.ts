export interface ITask {
    _id?: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    userId: string;
};


export interface TaskFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'create' | 'update';
    task?: ITask;
}

export interface ITaskModalState {
    isOpen: boolean;
    mode: "create" | "update";
    task?: ITask;
}
