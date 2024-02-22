<template>
    <div class="section ">
        Raportuj godziny
        <form @submit.prevent="submitForm">
          <div>
            <label>Wybierz kontahenta:</label>
            <select v-model="formData.contractor">
              <option value="null" disabled>Wybierz kontrahenta</option>
              <option v-for="option in options" :value="option.value">
                {{ option.text }}
              </option>
              </select>
          </div>
          <div>
            <label for="time">Opis zadania:</label>
            <textarea  name="description" id="description" v-model="formData.description"></textarea>
          </div>
          <div>
            <label for="time">Czas spędzony przy zadaniu:</label>
            <input type="number" name="time" id="time" v-model="formData.time">
          </div>
          <button type="submit">Wyślij</button>
        </form>
    </div>
</template>

<script lang="ts">
import {contractorService, timeSpentService} from '../services'
import  * as models  from '../models/index'
import { useStore } from 'vuex';


export default {
  name: 'DashboardHome',
  mounted () {
    this.fetchData()
  },
  
  data() {
    return {
      formData: {
        contractor: null,
        time: 0,
        description : '',
      },
      options : [],
    };
  },
  methods: {
     submitForm() { 
         timeSpentService.create({
          contractor: this.formData.contractor,
          time: this.formData.time,
          description : this.formData.description
        })    
    },

    async fetchData() {
      const store = useStore(); 
      try {
        store.dispatch('startLoading'); 
        const contractors = await contractorService.getAll();
        this.options = contractors.map((contractor: models.Contractor) =>  {
          return {'text':contractor.name,value:contractor.id }
         })
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      } finally {
        store.dispatch('stopLoading'); 
      }
    }
  }



}
</script>