import React from 'react'
import './Content.css'

const Content = () => {
    return (
        <div>
            <h3 className="name-profile">My name is Slim</h3>
            <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
            </div>
        </div>
    )
}

export default Content
