import usePromise from "../hooks/usePromise";
import { getAllArticles } from "../services/articlesService";

export default function Home() {

    const { result , isLoading, isError } = usePromise(getAllArticles)

    const articles = result ? result : []


    return (
        <>
            <h1>Latest Articles</h1>
            {isLoading ? <p>Loading...</p> : null}
            {isError ? <p>Whoops, something went wrong. Please try again.</p> : null}
            {result ? <div>
                {articles.map(article => {
                    return <section key={article.id}>
                        <p>id: {article.id}</p>
                        <p>timestamp: {new Date(article.timestamp).toString()}</p>
                        <p>title: {article.title}</p>
                        <p>tags: {article.tags.map(t => t.toUpperCase()).join(", ")}</p>
                        <p>author: {article.author}</p>
                        <p>blurb: {article.blurb}</p>
                        <hr />
                    </section>
                })}
            </div> : null}
        </>
    )





}