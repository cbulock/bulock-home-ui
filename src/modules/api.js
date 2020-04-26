const call = (method, params = {}) =>
	fetch(`${process.env.REACT_APP_API_URL}${method}`, params);

const get = (method) =>
	fetch(`${process.env.REACT_APP_API_URL}${method}`).then((res) => res.json());

export default call;

export { call, get };
