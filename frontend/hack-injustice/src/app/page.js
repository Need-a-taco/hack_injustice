// import Image from "next/image";
import {
  Button
} from "@/components/ui/button"
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";

export default function Home() {
  return (
    <>
    <header>
      <div>
        <Button asChild size='lg'>
          Sign In 
        </Button>
      </div>
    </header>
    <main>
    <TypographyH2 className={"flex flex-col items-center"}>
      <span>Welcome to our hackathon project!</span>
    </TypographyH2>
    </main>
    <footer className="mt-5 w-full">
        <p className="text-center text-gray-400 text-xs py-4">
          Made by Chris Li, Dai Pham, Josh Zhang, and Josh Zhang
        </p>
      </footer>
    
    </>
   
    
  );
}



{/* <header className="bg-dark px-4 py-2 flex w-full items-center justify-between mb-5">
        <div
          className={`flex md:text-7xl text-light relative -top-1 ${titan.className}`}
        >
          <Image
            src={avocado}
            alt="Avocado"
            width="500"
            className="absolute left-4 md:left-16 top-1 md:top-2 w-4 md:w-16"
          />
          <h1>M</h1>
          <div className="w-5 md:w-16" />
          <h1 className="tracking-widest">NCH</h1>
        </div>
        <Button
          asChild
          size="lg"
          className={`text-white md:text-2xl uppercase ${titan.className}`}
        >
          <SignOutButton />
        </Button>
      </header> */}