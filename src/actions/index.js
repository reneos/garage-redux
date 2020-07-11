// TODO: add and export your own actions
export function fetchCars(garageName) {
  const url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

export function createCar(body, garageName, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(callback);
  return {
    type: 'CAR_CREATED',
    payload: request
  };
}

export function fetchCar(id) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: 'FETCH_CAR',
    payload: promise
  };
}
