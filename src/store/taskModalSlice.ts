import { ITaskModalState } from "@/models/task.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ITaskModalState = {
  isOpen: false,
  mode: "create",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<Pick<ITaskModalState, "mode" | "task">>) {
      state.isOpen = true;
      state.mode = action.payload.mode;
      if (action.payload.mode === "create") {
        state.task = undefined;
      }
      state.task = action.payload.task;
    },
    closeModal(state) {
      state.isOpen = false;
      state.task = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
