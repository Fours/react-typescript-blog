import type { Article } from "../types/types"

const host = "http://localhost:8000"


export async function getAllArticles(): Promise<Article[]> {

    //await delay(1000)
    const res = await fetch(`${host}/api/articles`)
    const data = await res.json()
    return data as unknown as Article[]
}

export async function getAllAuthors(): Promise<string[]> {

    //await delay(1000)
    const res = await fetch(`${host}/api/authors`)
    const data = await res.json()
    return data as unknown as string[]
}



function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}