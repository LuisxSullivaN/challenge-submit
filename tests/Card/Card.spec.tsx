import React from 'react';
import { render } from '@testing-library/react'
import Card from '../../lib/Card/Card';
import smallDataset from '../../data/small-dataset.json';
import '@testing-library/jest-dom';

describe('Film card', () => {
  const { items: films } = smallDataset.data.filmCollection;
  const testId = "unique-card";

  it ('should be a link', () => {
    const film = films[0];
    const { getByRole, getByTestId } = render(
      <Card film={film} data-testid={testId} />
    );

    expect(getByRole('link')).toBeTruthy();
    expect(getByTestId(testId)).toHaveAttribute('href', `/films/${film.slug}`)
  });

  it ('should contain an image', () => {
    const film = films[0];
    const { getByRole } = render(
      <Card film={film} />
    );

    expect(getByRole('img')).toBeTruthy();
  });

  it ('should contain a title', () => {
    const film = films[0];
    const { getByRole } = render(
      <Card film={film} />
    );

    expect(getByRole('heading')).toHaveTextContent(film.title);
  });

  it ('should contain an artist if one is present', () => {
    const film = films[0];
    const { getByTestId } = render(
      <Card film={film} />
    );

    expect(getByTestId('card-artist')).toHaveTextContent(film.featuredArtistsCollection.items[0].title);
  });

  it ('should not contain an artist if one is not present', () => {
    const film = films[7];
    const { queryByTestId } = render(
      <Card film={film} />
    );

    expect(queryByTestId('card-artist')).toBeFalsy();
  });
});