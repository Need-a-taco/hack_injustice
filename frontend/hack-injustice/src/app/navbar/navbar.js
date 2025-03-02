import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar({ className, ...props }) {
  // Create supabase server component client and obtain user session from Supabase Auth
  const supabase = createServerComponentClient({cookies});
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-base font-medium transition-colors hover:text-primary">
        Home
      </Link>
      {user && (
        <>
          <Link href="/feedback" className="text-base font-medium transition-colors hover:text-primary">
            Feedback
          </Link>
        </>
      )}
    </nav>
  );
}
