export const NORMA_API = 'https://norma.nomoreparties.space/api';

export const responseCheck = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((error) => Promise.reject(error));
};

export const getIngredients = () => {
  return fetch(`${NORMA_API}/ingredients`)
    .then(responseCheck)
    .catch((error) => console.log(error));
};

export const postOrder = async (ingredients) => {
  try {
    const req = await fetch(`${NORMA_API}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients }),
    });
    return await responseCheck(req);
  } catch (error) {
    throw new Error('Что-то пошло не так(');
  }
};
