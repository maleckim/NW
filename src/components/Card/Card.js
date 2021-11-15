import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
    const { primaryImage, artistDisplayName, title, creditLine } = props.data;
    return (
        <div > <h2>{title} {artistDisplayName ? `by ${artistDisplayName}` : ""}</h2>
                <img height="300px" src={primaryImage} />
                <h4>{creditLine}</h4>
        </div>
    )
} 
