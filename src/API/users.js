const url = "https://backend-financial-patrones.vercel.app/api/users";

export const usersAPI = {
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

  getbyEmailandPassword: async (data) => {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },

  getByEmail: async (email) => {
    const response = await fetch(`${url}/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },

  updateStatus: async (id) => {
    const response = await fetch(`${url}/updateStatus`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },

  update: async (data) => {
    const response = await fetch(`${url}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },
};
