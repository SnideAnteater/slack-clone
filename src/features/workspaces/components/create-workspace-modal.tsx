import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import useCreateWorkspaceModal from "../store/use-create-workspace-modal";

const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();
};

export default CreateWorkspaceModal;
