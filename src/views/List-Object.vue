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
import adapter from '@/adapters/adapter1';

export default {
  name: 'ListObject',

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
      this.list = await adapter.getList();
    }
  },

  components: {
    ListTable,
  },
}
</script>