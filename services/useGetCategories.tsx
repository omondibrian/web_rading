import React,{useEffect} from 'react'
import { HttpClient } from './httpClient'

const client = new HttpClient("http://localhost:3000/api");

export interface ICategories{
    name: string,
    id:string;
  }

function useGetCategories():[boolean,string,Array<ICategories>] {
    const [loading,setLoading ] = React.useState(false);
    const [error,setError ] = React.useState("");
    const [categories,setCategories] = React.useState<Array<ICategories>>([])

    useEffect(() => {
        setLoading(true);
     (async function(){
        try {
            const data = await client.doGet<{msg:string,categories:Array<ICategories>}>('/categories');
            setCategories(data.categories)
            setLoading(false);
        } catch (error:any) {
           setError(error.message) 
        }
     })()

    }, [])
    
  return [loading,error,categories]
}

export default useGetCategories