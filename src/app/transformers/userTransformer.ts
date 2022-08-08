export const UserCreateTransformer = (user: User, interest: Interest) => {
    return {
        name: user.name,
        dni: user.dni,
        phone: user.phone,
        city: user.city,
        province: user.province,
        interest: {
            name: interest.title
        }
    }
}



interface User {
    id: number;
    name: string;
    dni: string;
    phone: string;
    city: string;
    province: string;
}

interface Interest {
    id: number;
    title: string;
}