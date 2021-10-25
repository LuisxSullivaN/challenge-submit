export type ArtistCollectionItem = {
  title: string;
}

export type Film = {
  sys: {
    id: string;
    firstPublishedAt: string;
  }
  title: string;
  slug: string;
  image: {
    url: string;
  }
  genre: {
    title: string;
    slug: string;
  }
  featuredArtistsCollection: {
    items: ArtistCollectionItem[];
  }
}

export type FilmsCollectionData = {
  data: {
    filmCollection: {
      items: Film[];
    }
  }
}