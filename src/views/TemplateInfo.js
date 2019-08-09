import React from 'react';
import '../views/components.css';
import { Row, Col } from 'react-bootstrap';
import firstimgInfo from '../image/firstimgInfo.jpg';
import secondimgInfo from '../image/secondimgInfo.jpg';


const TemplateInfo = () => {
                return (
                    <div>
            
                        <h1>Información de la Enfermedad</h1>
                       
                               
                          <Row> 
                        
                              <Col xs = {12} md ={6}>  
                                <img src={firstimgInfo} alt=""/>
                              </Col>
            
                              <Col  xs = {12} md ={6}>
                              <img src={secondimgInfo} alt=""/>
                            </Col>
                          </Row>
                    
            
                    </div>
                )
            }
            
export default TemplateInfo;