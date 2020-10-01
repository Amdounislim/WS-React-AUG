import React from 'react'

export default function Main() {
    let name="Hello Word"
    let arr = ["ghassen", " amira", "nissrine", "elias", "labib"]
    return (<>
    <h2>{name}</h2>
    <div>{arr.map(el=><h5>{el}</h5>)}</div>
    </>
    )
}
