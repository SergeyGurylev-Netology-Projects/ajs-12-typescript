import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from "./domain/Movie";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

cart.add(new Movie(
    1009,
    'The Avengers',
    0,
    2012,
    'USA',
    'Avengers Assemble!',
    ['fantastic', 'action', 'adventures'],
    137));

console.log(cart.delete(1001));
console.log(cart.getAmount());
console.log(cart.getAmount(10));
console.log(cart.items);
