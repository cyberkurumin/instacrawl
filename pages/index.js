import Head from 'next/head'
import Summary from '../components/account/summary'
import PostList from '../components/account/postsList'
import React from 'react'


const validate = values => {
    const errors = {}
    if (!values.profile) {
        errors.profile = 'This is a required field'
    }

    return errors
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null
        }
    }

    changeName() {
        console.log('Hello')
        this.setState(
            { name: 'Jorge' }
        )
    }

    render() { return (
        <div>
            <div>
             <label htmlFor='profile'>Instagram Profile</label><br />
        <input type='text' name='profile' />
        </div>
        <div>
        <button type='submit' onClick={this.changeName.bind(this)} >Launch Research</button>
        </div>
        <Summary name={this.state.name}></Summary>
        <PostList></PostList>
        </div>
    )
    }}

export default Home;
