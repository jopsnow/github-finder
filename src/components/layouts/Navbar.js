import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {    
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1><i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        )
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

export default Navbar
