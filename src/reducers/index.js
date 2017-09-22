import { combineReducers } from 'redux';
import SearchReducer from './reducer_search_books';
import SearchTerm from './reducer_set_term';
import SelectedBook from './reducer_set_selected_book';

const rootReducer = combineReducers({
  books: SearchReducer,
  searchTerm: SearchTerm,
  selectedBook: SelectedBook
});

export default rootReducer;
