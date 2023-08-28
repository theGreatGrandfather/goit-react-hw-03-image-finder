import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Header, SearchForm, SearchFormBtn, SearchInput} from './Searchbar.styled'
import { FaSearch } from "react-icons/fa";

export class Searchbar extends Component {
    state = {
        searchItem:''
    }
    
    onInputChange = e => {
        this.setState({
            searchItem: e.currentTarget.value.toLowerCase()
        })
    }

    onFormSubmit = e => {
        e.preventDefault();

        if (this.state.searchItem.trim() === '') {
            return toast.error('enter a search term');
        }
        this.props.getSearchQuery(this.state.searchItem);
        this.setState({
            searchItem: ''
        })
    }

    render() {

        return (
            <Header>
                <SearchForm
                    onSubmit={this.onFormSubmit}
                >
                    <SearchFormBtn>
                        <FaSearch/>
                    </SearchFormBtn>
                    <SearchInput
                        type='text' 
                        name="searchItem"
                        value={this.state.searchItem}
                        onChange={this.onInputChange}
                    />
                </SearchForm>
            </Header>
        )
    }
}

Searchbar.propTypes = {
    getSearchQuery: PropTypes.func.isRequired,
}

export default Searchbar