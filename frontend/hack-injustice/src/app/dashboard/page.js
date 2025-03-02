// import Image from "next/image";
import {
    Button
  } from "@/components/ui/button"
  import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
  
  export default function Home() {
    return (
      <>
      <main>
      <TypographyH2 className={"flex flex-col items-center"}>
        <span>Welcome to our hackathon project!</span>
      </TypographyH2>
      <div>
          <Button asChild size='lg'>
            Sign In 
          </Button>
        </div>
      </main>
      <footer className="mt-5 w-full">
          <p className="text-center text-gray-400 text-xs py-4">
            Made by Chris Li, Dai Pham, Josh Zhang, and Josh Zhang
          </p>
        </footer>
      
      </>
     
      
    );
  }