export const getUsers = async (req, res) => {
  try {
    // Make a GET request to JSONPlaceholder using fetch
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check if the request was successful (status code 200)
    if (response.ok) {
      // Parse the JSON data from the response
      const users = await response.json();

      // Send the users data to the client
      res.json(users);
    } else {
      // If the response status is not OK, handle the error
      console.error("Error fetching data:", response.statusText);
      res.status(response.status).send("Internal Server Error");
    }
  } catch (error) {
    // Handle other errors
    console.error("Error fetching data:", error.message);
    res.status(500).send("Internal Server Error");
  }
};
