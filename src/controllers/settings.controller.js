const settingsData = [
    {
        id: 1,
        name: 'Dark Mode',
        notification: 'Enabled',
        language: 'English'
    },
    {
        id: 2,
        name: 'Light Mode',
        notification: 'Disabled',
        language: 'English'
    },
    {
        id: 3,
        name: 'Auto Mode',
        notification: 'Enabled',
        language: 'Spanish'
    }
]

export const getSettings = async(req, res) => {
    try {
        const userID = req.params.id;
        const userSettings = settingsData.find(setting => setting.id === parseInt(userID));
        if (!userSettings) {
            return res.status(404).json({ message: 'Settings not found for the given user ID' });
        }
        res.status(200).json(userSettings);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching settings', error: error.message });
    }
}


