import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import Items from "./items";
import { LogoSmall } from "@/svgs/logo-small";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { SubsriptionPlan } from "../subsription-plan";
import UpgradeCard from "./UpgradeCard";

type Props = {
  slug?: string;
  page?: string;
};

const SideBar = ({ slug ,page}: Props) => {
  return (
    <div
      className='w-[250px]
    border-[1px]
    fixed
    left-0
    radial
    lg:inline-block
    border-[#545454]
    bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD]
    hidden 
    bottom-0
    top-0
    m-3
    rounded-3xl overflow-hidden
    '
    >
        <div className=" flex flex-col
            gap-y-5
            h-full
            w-full
            p-3
            bg-[#0e0e0e] opacity-90
            bg-clip-padding
            backdrop-filter
            backdrop-blur-3xl
        ">
            <div
            className="flex gap-x-2 justify-center items-center p-5"
            >
                <LogoSmall />
            </div>
            <div className="flex flex-col ">
                <Items slug={slug} page={page} />
            </div>
            <div className="px-8">
                <Separator
                 className="bg-[#545454] h-[1px] w-full"
                />
            </div>
            <div className="px-3 flex flex-col gap-y-5">
                <div className="flex gap-x-2">
                    <ClerkAuthState />
                    <p className="text-[#9B9CA0]">Profile</p>
                </div>
                <div className="flex gap-x-3">
                    <HelpDuoToneWhite/>
                    <p className="text-[#9B9CA0]">Help</p>
                </div>
            </div>
            <SubsriptionPlan>
               <div className="flex-1 flex flex-col justify-end">
                  <UpgradeCard />
               </div>
            </SubsriptionPlan>
        </div>

    </div>
  );
};

export default SideBar;
