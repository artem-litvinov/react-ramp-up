import employees from './employees';
import delay from './delay';

class PrismApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }
}

export default PrismApi;
