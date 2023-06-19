"use client";
import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

const Typewriter = ({ text }: { text: string }) => {
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setOutput(output + text.charAt(index));
        setIndex(index + 1);
      }, 100);
    }
  }, [index, output, text]);

  return <p>{output}</p>;
};

export default Typewriter;
