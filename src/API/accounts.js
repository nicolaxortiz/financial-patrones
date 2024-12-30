const url = "http://localhost:3000/api/accounts";

export const accountsAPI = {
  getByID: async (id) => {
    const response = await fetch(`${url}/get/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataResponse = await response.json();

    return dataResponse;
  },

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

  update: async (id, data) => {
    const response = await fetch(`${url}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },

  delete: async (id) => {
    const response = await fetch(`${url}/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataResponse = await response.json();

    return dataResponse;
  },
};
