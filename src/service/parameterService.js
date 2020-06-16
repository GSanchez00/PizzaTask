import axios from 'axios';

export const getParameters = async() => 
{
    try
    {
        const parameterResponse = await axios("parameter");
        const parameters = await parameterResponse.data;
        return parameters;
    }
    catch(error)
    {
        return error;
    }
}
