import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const styles = {
    textAlign: 'center'
}
 
const Footer = () => (
  <div style={styles} className='Footer'>
    <Container>
      <Row>
        <Col md='4'>Men</Col>
        <Col md='4'>Career</Col>
        <Col md='4'>Instagram</Col>
      </Row>
      <Row>
        <Col md='4'>Women</Col>
        <Col md='4'>Our ecological actions</Col>
        <Col md='4'>Facebook</Col>
      </Row>
      <Row>
        <Col md='4'>Auction</Col>
        <Col md='4'>I like Bid&Buy</Col>
        <Col md='4'>Contact Us</Col>
      </Row>
      <Row>
        <Col md='12' style={{textAlign: 'center', paddingTop:'30px'}}>Copyright your website © 2019 All Rights Reserved</Col>
      </Row>
    </Container>
  </div>    
)

export default Footer;