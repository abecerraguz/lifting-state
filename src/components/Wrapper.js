import React, { useState } from 'react';
 
/*Se llaman los componentes Input y FilteredList */
import Input from './Input';
import FilteredList from './FilteredList';
import UserForm from './Userform';

// Se cra el componente Wrapper y se llaman las props en Items
const Wrapper = ({ items }) => {

    // Se define el useState
    // 
    const [filter, setFilter] = useState('');
 
    return (
        <div>
            <h2>My Filtered List</h2>
            <Input
                filter={filter}
                setFilter={setFilter}
            />
            <FilteredList
                filter={filter}
                items={items.filter(item => item.indexOf(filter) > -1)}
            />

            <UserForm></UserForm>
        </div>
    );
}
 
export default Wrapper;