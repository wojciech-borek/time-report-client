import APIClient from '@/api-client';
import  * as models  from '../models/index'
  

export default class ContractorService {
    private client: APIClient;

    constructor(client?: APIClient) {
        this.client = client ? client : new APIClient();
    }

    initClient(client?: APIClient) {
        this.client = client || new APIClient();
    }

    createContractor(data: any) : models.Contractor{
        return {
            id: data['@id'],
            name: data.name,
            email: data.email,
        }
    }


    async getAll(): Promise<models.Contractor[]> {
       const response = await this.client.get('/contractors');
        return (response['hydra:member'].map(item => this.createContractor(item)));
    }

    async getOne(id: string): Promise<any> {
        const response = await this.client.get('/contractors/' + id);
        return this.createContractor(response);
    }
}