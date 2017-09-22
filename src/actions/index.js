import axios from 'axios';

// https://itunes.apple.com/search?term=ReactJS&media=ebook&limit=1
const SEARCH_ROOT_URL = 'https://itunes.apple.com/search?media=ebook';

export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SELECTED_BOOK = 'SELECTED_BOOK';

export function searchBooks(term, topRows) {
  const url = `${SEARCH_ROOT_URL}&limit=${topRows || 25}&term=${term}`;
  const request = axios.get(url);

  return {
    type: SEARCH_BOOKS,
    payload: request
  };
}

export function setSearchTerm(term) {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  };
}

export function setSelectedBook(book) {
  return {
    type: SELECTED_BOOK,
    payload: book
  };
}
