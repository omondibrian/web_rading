export class HttpClient{
    constructor(private readonly _BaseUrl:string){}
   async doGet<T>(url:string):Promise<T>{
      const res = await  fetch(`${this._BaseUrl}${url}`);
      const data = await res.json();
      return data as T;
    }
}

