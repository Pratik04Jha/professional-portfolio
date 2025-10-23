"use client";
import React from "react";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <Button
      variant="ghost"
      onClick={() => window.history.back()}
      className="mb-6"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Previous route
    </Button>
  );
};

export default BackButton;
