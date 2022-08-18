import {Row,Col} from 'reactstrap'
import {EmailIcon} from '@mui/icons-material/Email';
const TopBar = ({topBarInfo}) => {
    const {name,designation,email,phone,address} = topBarInfo
    return (
        <section className="top-bar d-flex justify-center">
            <Row>
                <Col md={12}>
                    <h3 className="top-bar-name"> {name} </h3>
                </Col>
                <Col md={12}>
                    <h5 className="top-bar-desg"> {designation} </h5>
                </Col>
                <Col md={6} >
                    <p className="header-paragraph email-para text-right"> {email} </p>
                </Col>
                <Col md={6} >
                    <p className="header-paragraph phone-para text-left"> {phone} </p>
                </Col>
                <Col md={12}>
                    <p className="header-paragraph"> {address} </p>
                </Col>
            </Row>
            

        </section>
    )
}

export default TopBar;