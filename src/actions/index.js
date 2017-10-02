export const WORD = 'Hello';

export function sayStuff(str) {
  return ({
    type: WORD,
    payload: str
  });
}
