import axios from 'axios';

function fetchRequest(url, callback) {
  axios.get(url)
    .then(function (response) {
      if (response.status === 200) {
        return response.data;
      }
      throw new TypeError("Oops, something went wrong!");
    })
    .then(callback)
    .catch(function (error) { console.log(error); });
}

class PrismApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      fetchRequest('http://prism.akvelon.net/api/employees/all',
        (employees) => {
          employees.sort((a, b) => {
            const aName = `${a.LastName} ${a.FirstName}`;
            const bName = `${b.LastName} ${b.FirstName}`;
            if (aName < bName) return -1;
            if (aName > bName) return 1;
            return 0;
          });
          resolve(Object.assign([], employees));
        });
    });
  }
}

export default PrismApi;
