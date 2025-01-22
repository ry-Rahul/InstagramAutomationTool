import { Search, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

const SearchComponent = (props: Props) => {
  return (
    <div
      className="flex overflow-hidden gap-x-2 border-[1px] border-[#3352CC] rounded-full px-4 items-center flex-1 h-12"
    >
      <SearchIcon color="#3352CC" />
      <Input
        placeholder="Search by name, email or status"
        className="border-none outline-none ring-0 focus:ring-0 flex-1"
      ></Input>
    </div>
  );
};

export default SearchComponent;
