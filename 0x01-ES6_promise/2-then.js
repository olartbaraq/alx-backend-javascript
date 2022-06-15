export default function handleResponseFromAPI(promise) {
  promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve({
        status: 200,
        body: success,
      });
    } else {
      reject(Error());
    }
    promise.then(() => {
      const result = 'Got a response from the API';
      console.log(result);
    });
    return promise;
  });
}
