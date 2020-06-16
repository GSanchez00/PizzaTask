import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenericModal from './modals/genericModal';
import { createPizza, deleteType, deleteSize } from '../store/actions/actions';
import ButtonElement, { CustomContent } from './buttonElement';
import { currency } from '../helpers';

const PizzaGenerator = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const selectedPizzas = useSelector(state => state.selectedPizzas);
  const pizzaSizeLabel = useSelector(state => state.size.label);
  const sizePrice = useSelector(state => state.size.price);
  const pizzaSize = useSelector(state => state.size.size);

  const typePrice = useSelector(state => state.type.price);
  const pizzaType = useSelector(state => state.type.type);
  const pizzaTypeLabel = useSelector(state => state.type.label);
  const selectedCurrency = useSelector(state => state.currency);
  let currentSelectionPrice = sizePrice + typePrice;
  let modalMessage="There already is a pizza like this in the basket.";

  const makePizza = () => {
    const pizza = {
      price: currentSelectionPrice,
      quantity: 1,
      size: {
        size: pizzaSize,
        label: pizzaSizeLabel
      },
      type: {
        type: pizzaType,
        label: pizzaTypeLabel
      }
    };

    let selection=selectedPizzas.find(x=>x.size.size===pizzaSize && x.type.type===pizzaType)
    if(selection)
    {
      setModalShow(true);
      return;
    }
    
    dispatch(createPizza(pizza));
    dispatch(deleteSize());
    dispatch(deleteType());
  };

  
  return (
    <>
    <ButtonElement isDisabled={!typePrice} onClick={makePizza} type="button">
      Add to basket
      <CustomContent isHidden={!currentSelectionPrice}>
        &nbsp;for {currency(currentSelectionPrice, selectedCurrency)}
      </CustomContent>
    </ButtonElement>
    <GenericModal message={modalMessage} tittle={"Information"} show={modalShow} handleClose={()=>setModalShow(false)} />
    </>
  );
};

export default PizzaGenerator;
