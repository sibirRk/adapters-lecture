<template>
  <div class="list">
    <ListTable
      :columns="columns"
      :list="list"
    />
  </div>
</template>

<script>
import ListTable from '@/components/ListTable.vue';
import Adapter from '@/adapters/adapter2';

export default {
  name: 'ListClass',

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
      const adapter = new Adapter('http://localhost:3000');
      this.list = await adapter.getList(1, 5);
    }
  },

  components: {
    ListTable,
  },
}
</script>