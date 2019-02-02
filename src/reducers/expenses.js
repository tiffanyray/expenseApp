

// Expenses Reducer 
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE' :
      return state.filter( ({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return { 
            ...expense, //spread operator that makes it easy to 
            ...action.updates //update any of the existing infomation provided
          }
        } else {
          return expense;
        }
      })
    default: 
      return state;
  }
};

export default expensesReducer;