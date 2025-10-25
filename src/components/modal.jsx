"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss(e) {
    if (e.target === dialogRef.current) {
      router.back();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={onDismiss}
      className="backdrop:bg-background/60"
    >
      <div className="fixed z-1000 -translate-[50%] top-[50%] left-[50%] min-w-300">
        {children}
      </div>
    </dialog>
  );
}
