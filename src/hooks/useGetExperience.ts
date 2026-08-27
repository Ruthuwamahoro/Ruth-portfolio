import { getExperiences } from "@/services/experience"
import { useQuery } from "@tanstack/react-query"

export const useGetExperience = (page: number = 1) => {
    const { data, isPending, error} = useQuery({
        queryKey: ['experiences', page],
        queryFn: () => getExperiences(page),
        placeholderData: (prevData) => prevData,
    })

    return {
        data,
        isPending,
        error
    }
}