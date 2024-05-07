"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount = 0 }: { amount: number }) => {
  return (
    <div className="w-full">
      Rs. <CountUp end={amount} />
    </div>
  );
};

export default AnimatedCounter;
