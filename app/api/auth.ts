import AsyncStorage from "@react-native-async-storage/async-storage"

const auth = "https://taskback360.onrender.com/auth"

export const login = async ({ email, password }: { email: string; password: string }) => {
    try {
        const response = await fetch(`${auth}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        const rawData = await response.json()
        if (!rawData.data.token) {
            throw new Error("Token missing in response")
        }
        await AsyncStorage.setItem("token", String(rawData.data.token))
        return rawData
    } catch (error) {
        throw error
    }
}
