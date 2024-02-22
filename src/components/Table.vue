<template>
    <table class="table is-fullwidth">
  <thead>
    <tr>
    <th v-for="column in columns">
        {{ column.label }}
    </th>
    </tr>    
  </thead>
  <tfoot>
    <tr>
        <th v-for="column in columns">
        {{ column.label }}
        </th>
    </tr>
  </tfoot>
  <tbody>
    <tr v-for="item in items">
        <td  v-for="column in columns">         
            {{ item[column.key] }}
        </td>
    </tr>

  </tbody>
</table>
</template>

<script  setup lang="ts">
const props = defineProps<{
   columns: Array,
   items: Array
}>()
</script>