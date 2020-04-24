import React,{ useState, useEffect }  from 'react';
import {Container} from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode'
// import {connect} from './react-redux';
// import {handleChange} from './components/PromoCode/PromoCode';
import './App.css';

function App() {

  const [total, setTotal] = useState(100);
  const [pickupSavings, setPickupSavings] = useState(-3.85);
  const [taxes, setTaxes] = useState(0);
  const [estTotal, setEstTotal] = useState(0);
  const [disablePromoButton, setDisablePromoButton] = useState(false);
 
  useEffect(() => {
    setTaxes( (total+pickupSavings) * 0.0875)
  },[])

  useEffect(() => {
    setEstTotal(total+pickupSavings+taxes)
  },[taxes])


  return (
    <div className="container">
      <Container className ="purchase-card">
        <Subtotal price ={total.toFixed(2)}/>
        <PickupSavings price = {pickupSavings}/>
        <TaxesFees taxes = {taxes.toFixed(2)}/>
        <hr/>
        <EstimatedTotal price ={estTotal.toFixed(2)}/>
        <ItemDetails price ={estTotal.toFixed(2)}/>
        <hr/>
        <PromoCode 
          // giveDiscount = { () => {
          //   if (this.props.promoCode === 'DISCOUNT') {
          //     setEstTotal(estTotal * 0.9,
          //       () => {
          //         setDisablePromoButton(true);
          //       }
          //       );
          //   }
          // }
          // }
          giveDiscount = {() => {}}

          isDisabled={disablePromoButton}
        />
      </Container>
    </div>
  );
}

// const mapStateToProps = state => ({
//   promoCode: state.promoCode.value
// })

// export default connect(mapStateToProps)(App);
export default App;
