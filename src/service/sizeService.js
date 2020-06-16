import axios from 'axios';

export const getSizes = async() => 
{
    try
    {
        const sizeResponse = await axios("size");
        const sizes = await sizeResponse.data;
        return sizes;
    }
    catch(error)
    {
        return error;
    }
}
