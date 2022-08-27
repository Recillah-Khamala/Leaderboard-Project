const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rtt5Sef44hCxDygFaYqz/scores/';

const populated = document.querySelector('.counted');

export const display = async () => {
  await fetch(baseURL)
    .then((response) => response.json())
    .then((json) => {
      populated.innerHTML = '';
      json.result.forEach((element) => {
        const list = document.createElement('li');
        list.classList.add('users');
        list.textContent = `${element.user} :   ${element.score}`;
        populated.appendChild(list);
      });
    });
};

export const add = async () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const err = document.getElementById('err');
  if (name.value === '' || score.value === '') {
    err.textContent = 'Name and/or score empty';
  } else {
    err.innerHTML = '';
    const response = await fetch((baseURL), {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    });
    await response.json;
    display();
    name.value = '';
    score.value = '';
  }
};

export const refresh = () => {
  populated.innerHTML = '';
  display();
};