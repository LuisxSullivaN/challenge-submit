import React, { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import GridFilms from '../GridFilms/GridFilms';
import { Film } from '../../types';
import styles from './Home.module.css';

type HomeProps = {
  films: Film[];
};

export const Home: React.FC<HomeProps> = ({ films }) => {
  const [filmQuery, setFilmQuery] = useState('');
  const [filmGenre, setFilmGenre] = useState('');
  console.log(films);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFilmQuery(event.target.value);

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setFilmGenre(event.target.value);

  return (
    <>
      <header className={styles.header}>
        <img src="/images/logo.png" width={250} />
      </header>
      <main data-testid="film-container" className={styles.main}>
        <div className={styles.sidebar}>
          <form data-testid="form-container" className={styles.form}>
            <Input
              data-testid="search-input"
              type="text"
              placeholder="Search"
              onChange={handleQueryChange}
            />
            <Select data-testid="genre-dropdown" onChange={handleGenreChange}>
              <Select.Option disabled>Genre</Select.Option>
              <Select.Option>All</Select.Option>
              <Select.Option value="rock">Rock</Select.Option>
              <Select.Option value="alternative">Alternative</Select.Option>
            </Select>
          </form>
        </div>
        <GridFilms films={films} filmQuery={filmQuery} filmGenre={filmGenre} />
      </main>
    </>
  );
};

export default Home;
