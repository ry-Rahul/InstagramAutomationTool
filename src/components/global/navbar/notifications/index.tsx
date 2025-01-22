import { Bell } from "lucide-react";
import React from "react";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <div className="flex items-center rounded-full p-3 bg-white h-12">
      <Bell color="#3352CC" fill="#3352CC" />
    </div>
  );
};

export default Notifications;
