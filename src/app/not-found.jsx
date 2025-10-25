"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="text-center space-y-8">
        <div className="">
          <h1 className="text-9xl md:text-[12rem] font-bold tracking-tight">
            404
          </h1>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Page Not Found
          </h2>
          <p className="text-sm md:text-base max-w-md mx-auto">
            This is not the webpage you are looking for.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button>
            <Link
              href="/"
              className=""
            >
              <span className="relative z-10 flex items-center gap-2">
                Return Home
              </span>
            </Link>
          </Button>

          <Button onClick={() => window.history.back()} className="">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
