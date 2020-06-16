import axios from 'axios';

export const getPizzas = async() => 
{
    try
    {
        const pizzaResponse = await axios("pizza");
        const pizzas = await pizzaResponse.data;
        return pizzas;
    }
    catch(error)
    {
        return error;
    }
}
