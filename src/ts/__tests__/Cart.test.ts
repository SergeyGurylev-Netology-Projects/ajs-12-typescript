import Cart from '../service/Cart';
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const album = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const movie = new Movie(
    1009,
    'The Avengers',
    0,
    2012,
    'USA',
    'Avengers Assemble!',
    ['fantastic', 'action', 'adventures'],
    137);

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add products', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(album);
  cart.add(movie);

  expect(cart.items.length).toBe(3);
});

test('delete products', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(album);
  cart.add(movie);

  cart.delete(1008);

  expect(cart.items.length).toBe(2);
});

test('getAmount without discount', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(album);
  cart.add(movie);

  expect(cart.getAmount()).toBe(2900);
});

test('getAmount with discount', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(album);
  cart.add(movie);

  expect(cart.getAmount(10)).toBe(2900 - 290);
});
