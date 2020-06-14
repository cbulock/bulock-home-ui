const API_URL = process.env.REACT_APP_API_URL;

const call = (method, params = {}) => fetch(`${API_URL}${method}`, params);

const get = (method) => fetch(`${API_URL}${method}`).then((res) => res.json());

export default call;

export { call, get };
