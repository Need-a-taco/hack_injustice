import { createServerClient } from "@supabase/auth-helpers-nextjs";

export function getSupabaseServer(req, res) {
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    cookies: { req, res },
  });
}
