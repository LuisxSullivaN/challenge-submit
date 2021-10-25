import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Home from '../../lib/Home/Home';
import smallDataset from '../../data/small-dataset.json';
import '@testing-library/jest-dom';

describe('Home page', () => {
  const { items: films } = smallDataset.data.filmCollection;

  it('should show a form and a film container', () => {
    const { getByTestId } = render(
      <Home films={[]} />
    );

    expect(getByTestId('form-container')).toBeTruthy();  
    expect(getByTestId('film-container')).toBeTruthy();
  });

  it('should show a set of films', () => {
    const { getAllByTestId } = render(
      <Home films={films} />
    );

    expect(getAllByTestId('film-card')).toHaveLength(20);
  });

  it ('should filter by genre', () => {
    const { getByTestId, getAllByTestId } = render(
      <Home films={films} />
    );

    fireEvent.change(getByTestId('genre-dropdown'), {target: {value: 'rock'}})
    expect(getAllByTestId('film-card')).toHaveLength(5);
  });

  it('should show relevant search results', () => {
    const { getByTestId, getAllByTestId } = render(
      <Home films={films} />
    );

    fireEvent.change(getByTestId('search-input'), {target: {value: 'from the basement'}});

    const allCards = getAllByTestId('film-card');

    expect(allCards).toHaveLength(2);

    allCards.forEach((card) => {
      expect(card).toHaveTextContent(/From the Basement/);
    });
  });

  it('should show "no results" messaging', () => {
    const { getByTestId, queryAllByTestId } = render(
      <Home films={films} />
    );

    fireEvent.change(getByTestId('search-input'), {target: {value: 'asdkfnaskdjfhaksdjhfaksd'}});

    expect(queryAllByTestId('film-card')).toHaveLength(0);
    expect(getByTestId('film-no-results')).toBeTruthy();
    expect(getByTestId('film-no-results')).toHaveTextContent("We're sorry, the search did not yield any results.")
  });

  it('should show all films when clearing search field', () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <Home films={films} />
    );

    fireEvent.change(getByTestId('search-input'), {target: {value: 'asdkfnaskdjfhaksdjhfaksd'}});

    expect(queryAllByTestId('film-card')).toHaveLength(0);

    fireEvent.change(getByTestId('search-input'), {target: {value: ''}});
    expect(getAllByTestId('film-card')).toHaveLength(20);
  });
});