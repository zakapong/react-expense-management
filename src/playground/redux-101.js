import {createStore} from 'redux';


//action generators

const incrementCount = ({ incrementBy = 1} = {}) => ({
type: 'INCREMENT',
incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
    });

const resetCount = () => ({
        type: 'RESET'
        });
const setCount = ({ countBy}) => ({
            type: 'SET',
            countBy        
            });
         
//reducer
//1.reducers are pure function
//2. never change state or action

const countReducer = (state= {count:0}, action) => {
switch(action.type){
    case 'INCREMENT':

    return {
        count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    
    return {
        count: state.count - action.decrementBy
    };
    case 'SET':
    return {
        count: action.countBy 
    };
    case 'RESET':
    return {
        count: 0
    };

    default:
    return state;
}
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


//actions -than an object that gets sent to the store

//i'd like to increment the count
store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(incrementCount());
    
//i'd like reset the count to zero
store.dispatch(resetCount());


store.dispatch(decrementCount());


 store.dispatch(decrementCount({decrementBy: 10}));
    
    
store.dispatch(setCount({countBy: 101}));
        
        
