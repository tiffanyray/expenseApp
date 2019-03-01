import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseTotal } from '../../components/ExpenseTotal';

test('should render Expenses Total with one expense', () => {
    const wrapper = shallow(<ExpenseTotal expenseCount={1} expenseTotal={125} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render Expenses Total with multiple expenses', () => {
    const wrapper = shallow(<ExpenseTotal expenseCount={3} expenseTotal={598} />);
    expect(wrapper).toMatchSnapshot();
});

