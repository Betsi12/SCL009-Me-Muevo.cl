import React from 'react'
import '../views/components.css';
import { Row , Col, Container } from 'react-bootstrap';
import Footer from '';


const TemplateHome = () => {
    return (
         <div>
            <section>
            <Container>
              <Row> 
           
              <Col xs = {12} md ={12}>  
                   <img src={firstimgInfo} className="imgInfo" alt="Infografía de la Enfermedad"/>
              </Col>
            
            
               <Col  xs = {12} md ={12}>
                    <img src={secondimgInfo} className="imgInfo" alt="Infografía de la Enfermedad"/>
              </Col>
            
               </Row>
               </Container>
            </section>

        </div>
  
    
    )
}

export default TemplateHome;