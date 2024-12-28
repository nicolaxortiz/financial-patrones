const url = "http://localhost:3000/api/moves";

export const movesAPI = {
  create: async (data) => {
    const response = await fetch(`${url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },

  getByAccountId: async (id, filter) => {
    const response = await fetch(`${url}/get/${id}/${filter}`);

    const dataResponse = await response.json();

    return dataResponse;
  },
};
