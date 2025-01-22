//@ Get all notes
export const getNotes = async () => {
  try {
    const response = await fetch("http://localhost:9000/v1/notezen/");

    if (!response.ok) {
      throw new Error("Failed to get the notes!");
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
