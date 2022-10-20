import React,{useEffect} from 'react'
import { HttpClient } from './httpClient';

const client = new HttpClient("https://trading-silk.vercel.app/api");
export interface IProduct{
    name: string,
    categoryId:string;
    url: string;
    description: string;
    price:string;
    id:number;
}

function useGetProducts():[boolean,string,Array<IProduct>] {
    const [loading,setLoading ] = React.useState(false);
    const [error,setError ] = React.useState("");
    const [products,setProducts] = React.useState<Array<IProduct>>([])

    useEffect(() => {
        setLoading(true);
     (async function(){
        try {
            const data = await client.doGet<{msg:string,products:Array<IProduct>}>('/products');
            setProducts(data.products)
            setLoading(false);
        } catch (error:any) {
           setError(error.message) 
        }
     })()

    }, [])
    
  return [loading,error,products]
}

export default useGetProducts