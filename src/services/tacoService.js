import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/movies'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (tacoId) => {
    const result = await request.get(`${baseUrl}/${tacoId}`, );

    return result;
}

export const create = async (tacoData) => {
    const result = await request.post(baseUrl, tacoData);

    return result;
};

export const edit = async (tacoId, tacoData) => {
    const result = await request.put(`${baseUrl}/${tacoId}`, tacoData);

    return result;
};

export const remove = async (tacoId) => {
    const result = await request.remove(`${baseUrl}/${tacoId}`);
    return result;
  };

