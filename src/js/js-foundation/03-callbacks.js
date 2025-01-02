const users = [
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

function getUserById(id, callback) {
    const user = users.find(function getUser(users){
        return users.id === id;
    });
    if(!user) return callback(`User with id ${id} not found`);
    
    return callback(null, user);
}
module.exports ={
    getUserById,
}

