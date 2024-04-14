import { getHome } from "@/lib/api/home";
import createClient from "@/supabase/client";

export default async function Home() {
  const supabase = createClient('server');
  const {data} = await supabase.auth.getUser();
  const list = await getHome(supabase);

  return (
    <main>
      Hello - {data.user?.email}
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
