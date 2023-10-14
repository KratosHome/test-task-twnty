"use client"
import {getAllFilms} from "@/API/getAllFilms";
import {FilmsContainer, FilmsWrapper} from "@/app/films/fimsContainer";
import FilmItem from "@/components/FilmList/FilmItem";
import {Title} from "@/components/UI/Title";
import {ChangeEvent, useEffect, useState} from "react";
import {Button} from "@/components/UI/Button";
import {Input} from "@/components/UI/Input";
import AnimateProvider from "@/thems/AnimateProvider";

export const dynamic = "force-dynamic"

export default function Page() {
    const [allFilms, setAllFilms] = useState<Film[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [favouriteFilms, setFavouriteFilms] = useState<Film[]>([]);


    useEffect(() => {
        async function fetchFilms() {
            setLoading(true);
            const filmsResponse = await getAllFilms();
            setAllFilms(filmsResponse.result);
            setLoading(false);
        }

        fetchFilms();
    }, []);

    const filteredFilms = allFilms.filter(film =>
        film.properties.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSort = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);
    };

    const sortedFilms = [...filteredFilms].sort((a, b) => {
        const dateA = new Date(a.properties.release_date);
        const dateB = new Date(b.properties.release_date);

        return sortOrder === 'asc'
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
    });

    const toggleFavourite = (film: Film) => {
        const isFavourite = favouriteFilms.some(favFilm => favFilm.uid === film.uid);
        setFavouriteFilms(prevFavourites =>
            isFavourite
                ? prevFavourites.filter(favFilm => favFilm.uid !== film.uid)
                : [...prevFavourites, film]
        );
    };


    return (
        <AnimateProvider>
            <FilmsContainer>
                <Title>Film List</Title>
                <div className="favourite">Favourite: {favouriteFilms.length}</div>
                <div className="sort-container">
                    <Input type="text" value={searchTerm}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                           placeholder="Search by title"/>
                    <Button onClick={handleSort}>Sort by release date</Button>
                </div>
                <FilmsWrapper>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <FilmsWrapper>
                            {sortedFilms.map(film => (
                                <FilmItem
                                    key={film.uid}
                                    data={film}
                                    toggleFavourite={toggleFavourite}
                                    favouriteFilms={favouriteFilms}
                                />
                            ))}
                        </FilmsWrapper>
                    )}
                </FilmsWrapper>
            </FilmsContainer>
        </AnimateProvider>
    );
};

