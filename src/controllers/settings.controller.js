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

//controller function to get settings by user id
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

//controller function to update settings by user id
export const updateSettings = async(req, res) => {
    try {
        const userID = req.params.id;
        const userSettingsIndex = settingsData.findIndex(setting => setting.id === parseInt(userID));
        if (userSettingsIndex === -1) {
            return res.status(404).json({
                message: 'Settings not found for the given user ID' 
            });
        }
        const { name, notification, language } = req.body;
        settingsData[userSettingsIndex] = { 
            id: parseInt(userID),
            name,
            notification,
            language };
        res.status(200).json({
            message: 'Settings updated successfully',
            body: settingsData[userSettingsIndex]
        });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating settings', error: error.message });
    }
}


//controller function to delete settings by user id
export const deleteSettings = async(req, res) => {
    try {
        const userID = req.params.id;
        const userSettingsIndex = settingsData.findIndex(setting => setting.id === parseInt(userID));
        if (userSettingsIndex === -1) {
            return res.status(404).json({
                message: 'Settings not found for the given user ID'
            });
        }
        settingsData.splice(userSettingsIndex, 1);
        res.status(200).json({
            message: 'Settings deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting settings', error: error.message });
    }
}


