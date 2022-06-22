import axios from "axios";

export const search = async (searchText) => {
    const result = await axios.get(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=15&prop=extracts|pageimages&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=${searchText}
      `,
  
    );
  
    return result;
  };