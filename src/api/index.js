import testCards from '../data/testCards.json';

function delay(timeout = 10) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

export function getCards() {
  return delay().then(() => {
    return { data: { cards: [...testCards] } };
  });
}