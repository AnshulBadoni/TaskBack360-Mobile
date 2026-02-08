import AsyncStorage from "@react-native-async-storage/async-storage"

const task = "https://taskback360.onrender.com/tasks"

export const getTasks = async () => {
    try {
        const responst = await fetch(`${task}/getUserProjectTasks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${await AsyncStorage.getItem("token")}`
            }
        })
        const data = await responst.json()
        return data
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

export const getProjectTasks = async (projectId: string) => {
    try {
        const responst = await fetch(`${task}/getProjectTasks/${projectId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${await AsyncStorage.getItem("token")}`
            }
        })
        const data = await responst.json()
        return data
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}
