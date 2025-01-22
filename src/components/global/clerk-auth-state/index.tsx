import {
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import Loader from "../loader";
import React from "react";
import { User } from "lucide-react";

type Props = {};

const ClerkAuthState = (props: Props) => {
  return (
    <>
      <ClerkLoading>
        <Loader state={true}>
          <></>
        </Loader>
      </ClerkLoading>
      
      <SignedOut>
        <SignInButton>
          <Button
            className="rounded-xl 
            bg-[#252525]
             text-white
            hover: bg-[#252525]/70"
          >
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton>
        <UserButton.UserProfileLink
          label="Dashboard"
          url={`/dashboard`}
          labelIcon={<User size={16}/>}
          />
          </UserButton>
      </SignedIn>
      
    </>
  );
};

export default ClerkAuthState;
