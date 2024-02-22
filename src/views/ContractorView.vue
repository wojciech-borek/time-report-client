<template>
    <div class="section">
      <Table :columns="columns" :items="contractors" />
    </div>
</template>

<script lang="ts">

import Table from '../components/Table.vue'
import {contractorService} from '../services'
import { useStore } from 'vuex';


export default {
  components: {
    Table
  },

  
  data() {
    return {
      columns: [{key:'id',label:'ID'},{key:'name',label:'Nazwa'},{key:'email',label:'Adres email'}],
      contractors : []
    };
  },

  mounted() {
    this.fetchData(); 
  },

  methods: {
    async fetchData() {
      const store = useStore(); 
      try {
        store.dispatch('startLoading'); 
        this.contractors =await contractorService.getAll();
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      } finally {
        store.dispatch('stopLoading'); 
      }
    }
  },
}
</script>