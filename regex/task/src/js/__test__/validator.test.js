import Validator from '../validator';

test.each([
  ['Ivan', true],
  ['Ivan_11-a', true],
  ['1Ivan', false],
  ['Ivan1', false],
  ['Иван', false],
  ['Ivan-1111-a', false],
  ['_Ivan', false],
  ['Ivan-', false],
])(
  ('Username check'),
  (name, expected) => {
    const user = new Validator(name);
    const check = user.validateUsername();
    expect(check).toBe(expected);
  },
);
