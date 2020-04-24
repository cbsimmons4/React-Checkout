import React, { Component } from 'react';
import {
    Button,
    Collapse,
    Form,
    Row,
    Col,
    FormGroup,
    FormLabel,
    FormControl
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {handleChange} from '../../actions/promoCodeActions'

class PromoCode extends Component {
    constructor (props){
        super (props)
        this.state = {
            open: false,
            value: 0
        };
    } 

    // handleChange = e => {
    //     this.props.handleChange(e);
    // }

    render() {
        return (
            <div>
               <Button
                    className ="promo-code-button"
                    variant="link"
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    {this.state.open === false ? `Apply` : `Hide`} item details 
                    {this.state.open === false ? ` +`: ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Row className ="show-grid">
                            <Col md={12}>
                                <Form>
                                    <FormGroup controlId ="formInlineName">
                                        <FormLabel>Promo Code</FormLabel>
                                        <FormControl
                                        type ="text"
                                        placeholder ="Enter promo code"
                                        // value = {this.props.promoCode}
                                        value = {this.value}
                                        onChange ={this.handleChange}>
                                        </FormControl>
                                    </FormGroup>
                                    <Button
                                    block 
                                    variant = "success"
                                    className = "btn-round"
                                    disabled = {this.props.isDisabled}
                                    onClick = {this.props.giveDiscount}
                                    >Apply</Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     promoCode: state.promoCode.value
// })

//export default connect( mapStateToProps, {handleChange} )(PromoCode);
export default PromoCode;


 