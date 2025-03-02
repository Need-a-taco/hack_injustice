// import Image from "next/image";
import {
  Button
} from "@/components/ui/button"
import Link from "next/link"

import { TypographyH1, TypographyH2 } from "@/components/ui/typography";

export default function Landing() {
  return (
    <>
    <main>
    <div className="flex flex-col w-full items-center justify-center h-screen">
    <TypographyH2 className={"flex flex-col items-center"}>
      <span>Welcome to our hackathon project!</span>
    </TypographyH2>
    <div className="text-center">
        <Button asChild size='lg'>
          <Link href={"/login"}>Log In</Link>
        </Button>
      </div>
      <p className="text-center text-gray-400 text-xs py-4">
          Made by Chris Li, Dai Pham, Josh Zhang, and Josh Zhang
        </p>
    </div>
    </main>
    
    </>
   
    
  );
}