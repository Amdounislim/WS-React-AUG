import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <form>
                <input type="email"></input>
                <input type="password"></input>
                <button>Valider</button>
                <button>Reset</button>
            </form>
        )
    }
}
