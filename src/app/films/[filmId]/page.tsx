import {getFilm} from "@/API/getFilm";
import {getAllFilms} from "@/API/getAllFilms";
import AnimateProvider from "@/thems/AnimateProvider";

interface Params {
    params: {
        filmId: number
    }
}

export default async function Film({params: {filmId}}: Params) {
    const film = await getFilm(filmId)

    return (
        <AnimateProvider>
            <h1>{film.result.properties.title}</h1>
        </AnimateProvider>
    )
}

export async function generateStaticParams() {
    const films = await getAllFilms()

    return films.result.map((film) => ({
        filmId: film.uid
    }))
}