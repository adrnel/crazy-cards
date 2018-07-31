import testCards from '../data/testCards.json';

function delay(timeout = 1000) {
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