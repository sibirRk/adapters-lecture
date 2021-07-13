<template>
  <div class="list">
    <ListTable
      :columns="columns"
      :list="list"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ListTable from '../components/ListTable.vue';

export default {
  name: 'ListTwo',

  data() {
    return {
      list: [],
      columns: [
        { id: 'id', label: 'ID' },
        { id: 'name', label: 'Имя' },
      ]
    }
  },

  async created() {
  },

  components: {
    ListTable,
  },
}
</script>