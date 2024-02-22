import axios from 'axios'


export  interface ApiResponse {
  "@context": string;
  "@id": string;
  "@type": string;
  "hydra:totalItems" : number,
  "hydra:member": Array<any>
}

export default class APIClient {
private instance :any
constructor(){  
  this.instance = axios.create({
    baseURL: 'http://localhost/api', 
  });

}


async get(path: string, params?: any, options?: any): Promise<ApiResponse> {
    try {
      const response = await this.instance.get(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  };  




async post(path: string, params ?: any, options?: any): Promise<ApiResponse> {
  try {
    const response = await this.instance.post(path, {
      time: params.time,
      description: params.description,
      contractor: params.contractor,
    },
     {
      headers: {
        'Content-Type': 'application/ld+json'
      }
    }
  )
  return response.data;
  } catch (error) {
    throw error;
  }
};  

}