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
    }
  },

  components: {
    ListTable,
  },
}
</script>