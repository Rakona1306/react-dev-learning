import { useEffect, useState } from "react";

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}



export default function useFetch() {
    const [data, setData] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchPosts = async () => {

        console.log('HACIENDO FETCH')

        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (!response.ok) {
                throw new Error('HAY UN ERROR')
            }

            const data = await response.json()

            setData(data)

        } catch (e) {
            console.error('HUBO UN ERROR: ', e)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return {
        data,
        loading,
        error,
        fetchPosts
    }
}