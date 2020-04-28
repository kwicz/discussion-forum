import rootReducer from '../../components/reducers/index';
import formVisibleReducer from '../../components/reducers/form-visible-reducer';
import { createStore } from 'redux';
import postListReducer from '../../components/reducers/post-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
    
    test('Should return default state if no action type is recognized', () => {
        expect(rootReducer({}, { type: null })).toEqual({
            masterPostList: {},
            formVisibleOnPage: false
        });
    });

    test('Check that initial state of postListReducer matches root reducer', () => {
      expect(store.getState().masterPostList).toEqual(postListReducer(undefined, { type: null }));
    });
    
    test('Check that initial state of formVisibleReducer matches root reducer', () => {
      expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
    });

    test('Check that initial state of postListReducer matches root reducer', () => {
      const action = {
        type: 'ADD_POST',
        username: 'Muffins',
        title: 'I miss friends.',
        body: 'Will you all be my Reddit friends since real ones will give me the Rona?',
        date: 'dummy-string',
        upvotes: 0,
        downvotes: 0,
        id: 1 
      }
      store.dispatch(action);
      expect(store.getState().masterPostList).toEqual(postListReducer(undefined, action));
    });
    
    test('Check that initial state of formVisibleReducer matches root reducer', () => {
      const action = {
        type: 'TOGGLE_FORM'
      }
      store.dispatch(action);
      expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
    });

});
