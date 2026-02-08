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

//controller function to update a user by id
export const updateUser = async(req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(user => user.id === parseInt(userId));

    if( userIndex === -1 ) {
        res.status(404).json({
            message: 'User not found , Please check the user id and try again'
        });
        return;
    }

    const { name, email } = req.body;
    users[userIndex] = { id: parseInt(userId), name, email };
    res.status(200).json({
        message: 'User updated successfully',
        body : users[userIndex]
    });
};

//controller function to delete a user by id
export const deleteUser = async(req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(user => user.id === parseInt(userId));
    if( userIndex === -1 ) {
        res.status(404).json({
            message: 'User not found , Please check the user id and try again'
        });
        return;
    }
    users.splice(userIndex, 1);
    res.status(200).json({
        message: 'User deleted successfully'
    });
};  

//controller function to get all users
export const getAllUsers = async(req, res) => {
    res.status(200).json(users);
};

//controller function to create a new user
export const createUser = async(req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json({
        message: 'User created successfully',
        body: newUser
    });
};

