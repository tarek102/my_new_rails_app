import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetingSlice";

export const Greeting = () => {
  const dsipatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dsipatch(fetchGreeting());
  }, [dsipatch]);

  return (
    <div>
      <h1 className="heading">Refresh the page to view the same greeting in different language</h1>
      <h2>
        {greeting}
      </h2>
    </div>
  )
}