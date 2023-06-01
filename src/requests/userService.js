import axios from "axios";

export const postUser = async (id) => {
    try {
        const user = await axios.post(""); //url api
        return user.data;
    } catch (error) {
        console.log('user error:', error); 
    }
    
}