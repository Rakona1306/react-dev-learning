import type { Post } from "../../hooks/useFetch";

export default function PostItem({ body, title }: Post) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}