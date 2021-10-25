import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Film } from '../types';
import Home from '../lib/Home/Home';
import smallDataset from '../data/small-dataset.json';

export const getServerSideProps: GetServerSideProps<{ films: Film[] }> = async () => {
  return {
    props: {
      films: smallDataset.data.filmCollection.items
    }
  };
}

const HomePage: NextPage<{ films: Film[] }> = ({
  films
}) => (
  <>
    <Head>
      <title>The Coda Collection | Films</title>
      <meta name="description" content="The Coda Collection brings to life stories of iconic music moments through our curated library of exclusive, rarely-seen films available on Prime Video Channels, and original multimedia content created by renowned experts available only on codacollection.co" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Home films={films} />
  </>
);

export default HomePage;
