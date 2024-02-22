import ContractorService from './ContractorService';
import TimeSpentService from './TimeSpentService';

export const contractorService = new ContractorService();
export const timeSpentService = new TimeSpentService();

export const services = [
  contractorService,
  timeSpentService
];