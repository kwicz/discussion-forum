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

    
});
