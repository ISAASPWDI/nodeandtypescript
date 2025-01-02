interface User {
    id: number;
    name: string;
}
const users: User[] = [
    {
        id: 1,
        name: 'Jorge',
    },
    {
        id: 2,
        name: 'Luis',
    },
    {
        id: 3,
        name: 'Pedro',
    },
]

export const getUserById = (id: number, callback: (err?: string, user?: User)=> void) => {
    const user = users.find(function getUser(users){
        return users.id === id;
    });
    if(!user) return callback(`User with id ${id} not found`);
    
    return callback(undefined , user);
}


