import React from 'react';
import { Film } from '../../types';
import styles from './Card.module.css';

export const Card: React.FC<{ film: Film }> = ({ film, ...rest }) => (
  <a
    href={`/films/${film.slug}`}
    className={styles.card}
    key={film.sys.id}
    {...rest}
  >
    <img src={film.image.url} alt={film.title} />
    <div className={styles.content}>
      <h2 className={styles.title}>{film.title}</h2>

      {!!film.featuredArtistsCollection.items.length && (
        <p data-testid="card-artist">
          {film.featuredArtistsCollection.items[0].title}
        </p>
      )}
    </div>
  </a>
);


export default Card;
