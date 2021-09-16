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

  created() {
    this.getList();
  },

  methods: {
    async getList() {
      this.list = (await axios.get('http://localhost:3000/users', {
        params: {
          _page: 1,
          _limit: 50,
        }
      })).data;
    }
  },

  components: {
    ListTable,
  },
}
</script>