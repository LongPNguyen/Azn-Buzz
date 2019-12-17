import React from 'react';
import { Carousel, Card } from 'antd';

const carouselStyle = {
    textAlign: 'center',
    height: 'auto',
    width:'auto',
    lineHeight: '200px',
    background: 'white',
    overflow: 'hidden'
  }

const CardCarousel = () =>(
  <Carousel  style={{...carouselStyle}} autoplay effect='fade'>
    <Card bordered={false}>
        <h3>If you're a software engineer, take 3 sips</h3>
    </Card>
    <Card bordered={false}>
        <h1>Categories</h1>
        <h3>Asian countries. Loser takes 3 sips</h3>
    </Card>
    <Card bordered={false}>
        <h3>If you have family members who own a nail salon take 3 sips</h3>
    </Card>
    <Card bordered={false}>
        <h1>Pick Two</h1>
        <h3>Pick two types of Asian cuisine. Everyone votes on which one is better. Losing team takes 3 sips</h3>
    </Card>
  </Carousel>
);

export default CardCarousel;