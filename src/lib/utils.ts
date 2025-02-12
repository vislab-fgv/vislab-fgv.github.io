import type { ExtendedPublication, Publication } from "../types/publication";
import peopleData from "../data/people.json";
import venuesData from "../data/venues.json";

export const extendPublications = (
  publications: Publication[]
): ExtendedPublication[] => {
  return publications.map((publication) => {
    return {
      ...publication,
      authors: peopleData.filter((person) =>
        publication.authors.includes(person.id)
      ),
      venue: venuesData.filter((venue) => venue.id === publication.venue_id)[0],
    };
  });
};

export const extendPublication = (
  publication: Publication
): ExtendedPublication => {
  return {
    ...publication,
    authors: peopleData.filter((person) =>
      publication.authors.includes(person.id)
    ),
    venue: venuesData.filter((venue) => venue.id === publication.venue_id)[0],
  };
};
