import type {
  ExtendedPublication,
  Material,
  Publication,
} from "../types/publication";
import peopleData from "../data/people.json";
import venuesData from "../data/venues.json";
import materialsData from "../data/materials.json";

export const extendPublications = (
  publications: Publication[]
): ExtendedPublication[] => {
  const extendedPublications: ExtendedPublication[] = publications.map(
    (publication) => {
      return {
        ...publication,
        authors: peopleData.filter((person) =>
          publication.authors.includes(person.id)
        ),
        venue: venuesData.filter(
          (venue) => venue.id === publication.venue_id
        )[0],
        materials: (materialsData as Material[]).filter(
          (material) => material.pub_id === publication.id
        ),
      };
    }
  );

  return extendedPublications;
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
    materials: (materialsData as Material[]).filter(
      (material) => material.pub_id === publication.id
    ),
  };
};
