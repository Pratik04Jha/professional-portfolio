import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const BlogsCardSkeleton = () => {
  return (
    <Skeleton class="bg-accent/40 p-5 rounded-lg">
      <Skeleton class="flex gap-2 w-full animate-pulse">
        <Skeleton class="w-24 h-24 bg-accent rounded-2xl"></Skeleton>
        <Skeleton class="flex flex-col gap-5 w-full">
          <Skeleton class="h-8 bg-accent rounded"></Skeleton>
          <Skeleton class="h-6 bg-accent rounded"></Skeleton>
          <Skeleton class="flex gap-2 bg-accemt">
            <Skeleton class="w-6 h-6 bg-accent rounded-full"></Skeleton>
            <Skeleton class="h-4 bg-accent rounded w-1/4"></Skeleton>
            <Skeleton class="h-4 bg-accent rounded w-1/4"></Skeleton>
          </Skeleton>
          <Skeleton class="flex flex-col justify-between h-full">
            <Skeleton class="h-4 bg-accent rounded w-3/4"></Skeleton>
            <Skeleton class="flex gap-2">
              <button class="w-20 h-10 bg-accent rounded"></button>
              <button class="w-32 h-10 bg-accent rounded"></button>
            </Skeleton>
          </Skeleton>
        </Skeleton>
      </Skeleton>
    </Skeleton>
  );
};

export default BlogsCardSkeleton;
