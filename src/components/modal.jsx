'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Cross } from 'lucide-react';
import { CrossIcon } from 'lucide-react';
import { CrosshairIcon } from 'lucide-react';
import { X } from 'lucide-react';

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
      className="backdrop:bg-background/60 rounded-lg h-full flex items-center "
    >
      <div className="fixed p-20">
        <Button
          onClick={onDismiss}
          variant="outline"
          className="absolute top-25 right-25 max-w-10 max-h-10"
        >
          <X />
        </Button>
        {children}
      </div>
    </dialog>
  );
}