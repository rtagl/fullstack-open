import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  const fakeNote = {
    id: 10000,
    content: "this note doesnt exist",
    date: new Date().toISOString(),
    important: true,
  };
  return request.then((response) => response.data.concat(fakeNote));
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const noteService = { getAll, create, update };

export default noteService;
