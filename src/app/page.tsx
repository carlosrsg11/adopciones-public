import axios from "axios";
import Image from "next/image";
import { parsedEnv } from "../../env";
import UserCard from "@/components/UserCard";

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  address: string;
  password: string;
}

export default async function Home() {
  const response = await axios.get<User[]>(`${parsedEnv.NEXT_PUBLIC_API_URL}/users`);

  return (<main style={{ backgroundColor: '#005366' }}>
    <h1 className="text-4xl">Users:</h1>
    <ul className="text-xl">
      {
        response.data.map((user) => (
          <UserCard key={user.id} id={user.id} name={user.name} lastname={user.lastname} />
        ))
      }
    </ul>
  </main>);
}
