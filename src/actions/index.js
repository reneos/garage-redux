// TODO: add and export your own actions
export function fetchCars(garageName) {
  const url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

export function createCar() {

}
