'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      className="backdrop:bg-black/60 rounded-lg"
    >
      <div className="relative">
        <button
          onClick={onDismiss}
          className="absolute top-2 right-2 text-xl"
        >
          ×
        </button>
        {children}
      </div>
    </dialog>
  );
}