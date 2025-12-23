import usePromise from "../hooks/usePromise";
import { getAllAuthors } from "../services/articlesService";

export default function Authors() {

    const { result, isLoading, isError } = usePromise(getAllAuthors)
    const authors = result ? result : []

    return (
        <>
            <h1>Authors</h1>
            {isLoading ? <p>Loading...</p> : null}
            {isError ? <p>Whoops, something went wrong. Please try again.</p> : null}
            {result ? <div>
                {authors.map(author => {
                    return <h3 key={author}>{author}</h3>
                })}
            </div> : null}
        </>
    )
}