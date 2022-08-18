
import {Row,Col} from 'reactstrap'
const Footer = ({footerInfo}) => {
    const {name,dept,year} = footerInfo
    return (
        <section className="footer d-flex justify-center">
            <Row className='mx-auto'> 
                <Col md={12}>
                    <h3 className="foot-name"> {name} </h3>
                </Col>
                <Col md={12}>
                    <p className=""> {dept} - {year} </p>
                </Col>
                {/* <Col md={6}>
                    <p className="foot-year">  </p>
                </Col> */}
            </Row>
            

        </section>
    )
}

export default Footer;