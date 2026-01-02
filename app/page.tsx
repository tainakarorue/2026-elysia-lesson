import { api } from "@/lib/eden";

export default async function Home() {
  const data = await api.hello.get();

  return <div>{data.data?.hello}</div>;
}
