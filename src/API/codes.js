const url = "https://backend-financial-patrones.vercel.app/api/codes";

export const codesAPI = {
  create: async (id_user, email) => {
    const response = await fetch(`${url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_user, email }),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },

  get: async (code, id_user) => {
    const response = await fetch(`${url}/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, id_user }),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },
};
