export default function handleResponseFromAPI(promise) {
  const promiseResponse = { status: 200, body: 'success' };
  return promise
    .then(() => promiseResponse)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
