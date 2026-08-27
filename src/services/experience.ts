import axios from "axios";

export const getExperiences = async(page: number = 1) => {
    try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/experiences`, {
            params: {
                page
            }
        });
        return response.data;

    } catch(err){
        const error = err instanceof Error ? err.message : "Internal Server Error";
        throw new Error(error);
    }
}