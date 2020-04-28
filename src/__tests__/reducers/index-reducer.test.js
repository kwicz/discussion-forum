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
    
});
