import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/data/comments'


export const getAll = async (tacoId) => {
    const query = new URLSearchParams({
        where: `tacoId="${tacoId}"`,
        load: `owner=_ownerId:users`
    })

    const result = await request.get(`${baseUrl}?${query}`)
    console.log(result);
    return result
}

export const create = async(tacoId,text ) => {
    const newComment = await request.post(baseUrl, {
        tacoId,
        text,
    })

    return newComment
}


export const remove = async (tacoId) => {
    const result = await request.del(`${baseUrl}/${tacoId}`);
    console.log(result);
    return result;
  };

