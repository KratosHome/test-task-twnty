import Link from "next/link";
import {ContainerFilmItem} from "@/components/FilmList/staleFilmItem";
import {Button} from "@/components/UI/Button";
import Image from 'next/image';
interface FilmItemProps {
    data: Film;
    toggleFavourite: (film: Film) => void;
    favouriteFilms: Film[];
}

export default function FilmItem({data, toggleFavourite, favouriteFilms}: FilmItemProps) {
    const isFavourite = favouriteFilms.some(film => film.uid === data.uid);
    return (
        <ContainerFilmItem>
            <div>
                <div>
                    {data.properties.title}
                </div>
                <div onClick={() => toggleFavourite(data)} className="favourite">
                    <Image
                        src={isFavourite ? '/favoriteShos.png' : '/favorite.png'}
                        alt={isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            <div><span>Producer: </span>{data.properties.producer}</div>
            <div><span>Release Date: </span>{data.properties.release_date}</div>
            <div><span>director: </span>{data.properties.director}</div>
            <div><span>Opening Crawl: </span>{data.properties.opening_crawl}</div>
            <div className="button-container">
                <Link href={`/films/${data.uid}`}>
                    <Button>
                        details
                    </Button>
                </Link>
            </div>
        </ContainerFilmItem>
    );
}
