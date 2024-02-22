import APIClient from '@/api-client';
import  * as models  from '../models/index'
import ContractorService from './ContractorService';
import { contractorService } from './index';
  

export default class TimeSpentService {
    private client: APIClient;

    constructor(client?: APIClient) {
        this.client = client ? client : new APIClient();
    }

    initClient(client?: APIClient) {
        this.client = client || new APIClient();
    }

    createTimeSpent(data: any) : models.TimeSpent{
        const contractor: models.Contractor = contractorService.createContractor(data.contractor);

        return {
            id: data['@id'],
            description: data.description,
            time: data.time,
            contractor: contractor
            
        }
    }


    async create(params: any): Promise<models.TimeSpent> {
       const response = await this.client.post('/time_spents',params);
       return this.createTimeSpent(response);
    }

}