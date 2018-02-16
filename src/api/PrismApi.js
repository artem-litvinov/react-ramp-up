function fetchRequest(url, callback) {
  fetch(url)
    .then(function (response) {
      var contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Oops, we haven't got JSON!");
    })
    .then(function (obj) {
      return obj;
    })
    .then(callback)
    .catch(function (error) { console.log(error); });;
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
