import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [open, setOpen] = useState(true);
  const [isActive, setIsActive] = useState(0);

  function toggle() {
    setOpen((open) => !open);
  }

  return (
    <div className="flex">
      <Sidebar
        isOpen={open}
        handleClick={toggle}
        isActive={isActive}
        onClick={isActive}
      />
    </div>
  );
};

export default App;
