import { Suspense, use } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { getAllArticles } from "../services/articlesService"

const articlesPromise = getAllArticles()

function Articles() {

    const articles = use(articlesPromise)

    return (
        <>
           {articles.map(article => {
                return <section key={article.id}>
                    <p>id: {article.id}</p>
                    <p>timestamp: {new Date(article.timestamp).toString()}</p>
                    <p>title: {article.title}</p>
                    <p>tags: {article.tags.join(", ")}</p>
                    <p>author: {article.author}</p>
                    <p>blurb: {article.blurb}</p>
                    <hr />
                </section>    
            })} 
        </>
    )
}

export default function Home() {

    return (
        <>
            <h1>Home Page</h1>
            <ErrorBoundary fallback={<p>Whoops, an error occurred. Please try again.</p>} >
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="articles">
                        <Articles />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </>
    )

}