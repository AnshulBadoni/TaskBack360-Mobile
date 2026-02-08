import AsyncStorage from "@react-native-async-storage/async-storage"

const project = "https://taskback360.onrender.com/projects"

export const getProjects = async () => {
    try {
        const responst = await fetch(`${project}/getUserProjects`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${await AsyncStorage.getItem("token")}`
            }
        })
        const data = await responst.json()
        return data
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}
