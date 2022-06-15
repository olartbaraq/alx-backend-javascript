export default function signUpUser(firstName, lastName) {
  const prop = {
    firstName,
    lastName,
  };
  return Promise.resolve(prop);
}
