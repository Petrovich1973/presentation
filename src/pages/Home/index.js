import React from 'react';
import BackgroundImage1 from '../../media/home.png'
import BackgroundImage2 from '../../media/home2.png'
import './style.css';

const styles = {
    root: {
        // backgroundImage: `url(${BackgroundImage1})`
    },
    title: {
        position: 'absolute',
        top: '30%',
        left: '30%',
        margin: 0,
        padding: 0,
        lineHeight: 1,
        fontSize: '380%',
        color: '#7f878e'
    },
    description: {
        position: 'absolute',
        bottom: 0,
        left: '110%',
        margin: 0,
        padding: 0,
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        color: '#5eb4d3',
        fontWeight: 300
    },
    pic1: {
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: 300
    }
}

export const Home = () => (
    <div className={'Home'} style={styles.root}>
        <h1 style={styles.title}>
            DBUI
            <span style={styles.description}>product vision</span>
        </h1>

        <img src={BackgroundImage2} style={styles.pic1}/>
    </div>
)