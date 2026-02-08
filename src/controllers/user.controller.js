const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
];

//controller function to get a user by id
export const getUser = async(req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === parseInt(userId));

    if( !user ) {
        res.status(404).json({ 
            message: 'User not found , Please check the user id and try again' 
        });
        return;
    }

    res.status(200).json(user);
};