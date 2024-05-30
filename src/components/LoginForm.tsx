"use client";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

const schema = z.object({
    email: z.string().email("Correo inválido"),
    password: z.string().min(6),
});

interface FormData {
    email: string;
    password: string;
}

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'onChange',
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data.email);
        console.log(data.password);
    }

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Correo Electrónico: </label>
                <input className="text-black" id="email" placeholder="Ingrese su correo electrónico" type="email" {...register("email")} />
                <ErrorMessage name="email" errors={errors} />
            </div>
            <div>
                <label htmlFor="password">Contrasena: </label>
                <input className="text-black" id="password" placeholder="Ingrese su contrasena" type="password" {...register("password")} />
                <ErrorMessage name="password" errors={errors} />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    )
}