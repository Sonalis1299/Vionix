"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CreateVideos() {
    const [userInput, setUserInput] = useState();
  return (
    <div className="mt-32 flex flex-col items-center justify-center w-full ">
      <div>
        <Image src={"/a.png"} alt="icon" width={150} height={150} />
      </div>
      <h2 className="font-bold text-2xl text-center">
        📽️ Create AI Short Videos in Just One Click!
      </h2>
      <p className="mt-3 text-lg text-gray-500">
        🚀 Turn imagination into scroll-stopping content—AI creates viral-ready
        short videos instantly, no editing needed!
      </p>

      <Input
        placeholder="Enter the topic"
        className={"w-full max-w-lg text-lg mt-5"}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <Button className={"w-full max-w-md mt-5"}>
        {" "}
        <Sparkles /> Generate
      </Button>
    </div>
  );
}

export default CreateVideos;
