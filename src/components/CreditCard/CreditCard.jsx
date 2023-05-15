
import { Button, Form, Alert, Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Cards from 'react-credit-cards-2';
import { useCreditCard } from '../../context/CreditCardProvider';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import "../CreditCard/CreditCard.css"



const CreditCard = () => {
const {
  number,
  date,
  name,
  cvc,
  focus,

  setNumber,
  setName,
  setDate,
  setCvc,
  setFocus,

  handleSubmit,
  

} = useCreditCard();
  return (
    <>
    <div className="container">
      <div className="box justify-content-center align-items-center">
        <div className="credit-form">
          <div className="credit-cards">
          <Cards className="cards"
          number={number}
          name={name}
          expiry={date}
          cvc={cvc}
          focused={focus}
        />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Control
            type="text"
            id='name'
            name="number"
            pattern='[\d| ]{16,22}'
            maxLength={16}
            placeholder='Card Number'
            value={number}
            onChange={(e)=> setNumber(e.target.value)}
            onFocus={(e)=> setFocus(e.target.name)}
            
            />
            </Form.Group>
            
            <Form.Group>
            <Form.Control
            type="text"
            id='name'
            name="name"
            pattern='[a-z A-Z-]+'
            placeholder='Cardholder Name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            onFocus={(e)=> setFocus(e.target.name)}
            />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="expiry"
                    id="expiry"
                    pattern='\d\d/\d\d'
                    maxLength={4}
                    data-testid="cardType"
                    placeholder="Expiration Date"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                    onFocus={(e)=> setFocus(e.target.name)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="tel"
                    id="cvc"
                    data-testid="cvc"
                    name="cvc"
                     pattern='\d{3}'
                     maxLength={3}
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e)=> setCvc(e.target.value)}
                    onFocus={(e)=> setFocus(e.target.name)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button>Submit</Button>
          </Form>
        </div> 
      </div>
    </div>
    </>
  );
}

export default CreditCard;