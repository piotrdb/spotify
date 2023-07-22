"use client";

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider: React.FunctionComponent<ModalProviderProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        title="Test Modal"
        description="Description..."
        isOpen={false}
        onChange={() => {}}
      >
        Modal test children...
      </Modal>
    </>
  );
};

export default ModalProvider;
