import React from "react";
import moment from "moment";

interface GreeterProps {
  name: string;
  currentTime: number;
}

export default function Greeter({ name, currentTime }: GreeterProps) {
  const formattedTime = moment(currentTime).format(
    "dddd DD MMMM, YYYY HH:mm:ss a"
  );

  return (
    <div>
      <p>
        Hello {name}, the current time is {formattedTime}
      </p>
    </div>
  );
}
