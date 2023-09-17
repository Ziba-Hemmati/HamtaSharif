"use client";
import Info from "../../components/Info";
import Board from "../../components/Board";
import { useCallback, useState } from "react";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = useCallback(() => {
    setToggle((prev) => !prev);
  }, [toggle]);

  return (
    <div className="w-full min-h-screen flex justify-between items-center">
      <Info toggle={toggle} />
      <Board handleClick={handleClick} />
    </div>
  );
};

export default Dashboard;
