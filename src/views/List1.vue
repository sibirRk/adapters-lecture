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
import ListTable from '@/components/ListTable.vue';

export default {
  name: 'ListOne',

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
    this.list = (await axios.get('http://localhost:3000/users')).data;
  },

  components: {
    ListTable,
  },
}
</script>