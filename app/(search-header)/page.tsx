import createClient from "@/supabase/client";

export default async function Home() {
  const supabase = createClient('server');
  const {data} = await supabase.auth.getUser();
  return (
    <main>
      Hello - {data.user?.email}
    </main>
  );
}
