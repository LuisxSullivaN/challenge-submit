import React, { useEffect, useState } from 'react';
import { Film } from '../../types';
import Card from '../Card/Card';
import styles from './GridFilms.module.css';

interface GridFilmsProps {
  films: Film[];
  filmQuery: string;
  filmGenre: string;
}

export const GridFilms: React.FC<GridFilmsProps> = ({
  films,
  filmQuery,
  filmGenre
}) => {
  const [filteredFilms, setFilteredFilms] = useState<Film[]>([])

  const filterByQuery = () =>
    films?.filter((film) =>
      filmQuery
        ? film.title.toLowerCase().includes(filmQuery.toLowerCase())
        : film
    );

  const filterByGenre = (films: Film[]) => (
    films?.filter((film) =>
      filmGenre
        ? film.genre.title.toLowerCase() === filmGenre.toLowerCase() ||
          filmGenre === 'All'
        : film
    )
  )

  useEffect(() => {
    const filteredByQuery = filterByQuery();
    const filteredByGenre = filterByGenre(filteredByQuery);
    setFilteredFilms(filteredByGenre);
  }, [filmQuery, filmGenre])

  return (
    <div className={styles.films}>
      {filteredFilms?.map((film) => (
        <Card data-testid="film-card" film={film} key={film.slug} />
      ))}
      {filteredFilms?.length === 0 && (
        <div data-testid="film-no-results" className={styles.notfound}>
          We're sorry, the search did not yield any results.
        </div>
      )}
    </div>
  );
};

export default GridFilms;
