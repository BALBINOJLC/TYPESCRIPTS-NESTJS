import axios from "axios";


export interface HttpAdapter {
    get<T>( url: string): Promise<T>;

}

export class PokeApiFetchAdapter implements HttpAdapter { 

   async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log('Con fetch')

        return data;

    }
}

export class PokeApiAdapter implements HttpAdapter { 

    private readonly axios1= axios;


   async get<T>( url: string): Promise <T> {

    const { data } = await this.axios1.get<T>(url);

    console.log('Con axios')
        return data;
    }

    async post(url:string, data: any) {


    }

   

    async patch(url:string, data: any) {
        
    }

    async delet(url:string) {
        
    }
}