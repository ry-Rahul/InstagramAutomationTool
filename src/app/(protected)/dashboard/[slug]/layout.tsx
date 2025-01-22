"use client";

import NavBar from "@/components/global/navbar";
import React from "react";
import SideBar from "@/components/global/sidebar";
import { usePaths } from "@/hooks/user-nav";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  const { page } = usePaths();
  return (
    <div className="p-3">
      <SideBar slug={params.slug} page={page} />
      <div
        className="
        lg:ml-[250px]
        lg:pl-10
        lg:py-5
        flex
        flex-col
        overflow-auto"
      >
        <NavBar slug={params.slug} />
      </div>
    </div>
  );
};

export default Layout;
