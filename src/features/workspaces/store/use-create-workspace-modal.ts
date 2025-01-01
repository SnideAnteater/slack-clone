import React from 'react'
import {atom, useAtom} from "jotai"

const modalState = atom(false)

const useCreateWorkspaceModal = () => {
  return useAtom(modalState)
}

export default useCreateWorkspaceModal