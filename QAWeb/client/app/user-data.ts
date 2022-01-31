interface UserData {
    id: string;
    token: string;
    username: string;
    password: string;
    role: number;
}

const userDataKey = 'qa-platform-storage-1ef7b790-82a9-11ec-a8a3-0242ac120002'

export const saveUserData = (userData: UserData) => {
    localStorage.setItem(userDataKey, JSON.stringify(userData));
};

export const logoutUser = () => {
    localStorage.removeItem(userDataKey);
}

export const getUserData = () => {
    return JSON.parse(localStorage.getItem(userDataKey)) as UserData;
}