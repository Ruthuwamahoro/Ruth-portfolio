import { getProjects } from "@/services/projects"
import { useQuery } from "@tanstack/react-query"

export const useGetProjects = () => {
    const { data, isPending, error} = useQuery({
        queryKey: ['projects'],
        queryFn: getProjects,
    })

    console.log('data from useGetProjects hook', data)

    return {
        data,
        isPending,
        error
    }
}