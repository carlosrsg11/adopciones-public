'use client'

import Link from "next/link";

interface Props {
    id: number;
    name: string;
    lastname: string;
}

export default function UserCard({
    id, name, lastname
}: Props) {
    //const handleClick = () => {
    //    alert(`Hola, soy ${name}`)
    //};

    return (
        <div>
            <h2>{`${id} - ${name}, ${lastname}`}</h2>
            <Link href={`/${id}`} >Ver mas</Link>
        </div>
    )
}