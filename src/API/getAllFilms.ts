
export async function getAllFilms(): Promise<FilmsResponse> {
    const res = await fetch(`https://swapi.tech/api/films`, {
        cache: "force-cache"
    })
    return res.json()
}