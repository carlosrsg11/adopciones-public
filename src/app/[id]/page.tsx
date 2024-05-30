'use client';

import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
    params: {
        id: number;
    }
}

interface User {
    id: number;
    name: string;
    lastname: string;
    address: string;
    email: string;
}

export default function UserProfile({ params }: Props) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<User>(
                    process.env.NEXT_PUBLIC_API_URL + `/users/${params.id}` ?? ""
                );
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [params.id]);

    return (
        <main style={{ backgroundColor: '#005366' }}>
            <h1 className="text-4xl">Perfil del Cliente</h1>
            <h4 className="text-xl">{`ID: ${params.id}, Nombre: ${user?.name}, Apellido: ${user?.lastname}, Dirección: ${user?.address}, Email: ${user?.email}`}</h4>
        </main>
    );
}