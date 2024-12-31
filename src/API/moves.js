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

  getByAccountId: async (id, filter, offset) => {
    const response = await fetch(`${url}/get/${id}/${filter}/${offset}`);

    const dataResponse = await response.json();

    return dataResponse;
  },

  getByName: async (id, name, offset) => {
    const response = await fetch(`${url}/getByName/${id}/${name}/${offset}`);

    const dataResponse = await response.json();

    return dataResponse;
  },

  update: async (id, data, backType, backAmount, earnings, expenses) => {
    const newData = { ...data, backType, backAmount, earnings, expenses };
    const response = await fetch(`${url}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },

  delete: async (id, id_account, type, amount) => {
    const newData = { id_account, type, amount };
    const response = await fetch(`${url}/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const dataResponse = await response.json();

    return dataResponse;
  },
};
