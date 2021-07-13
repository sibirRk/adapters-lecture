<template>
  <div class="list">
    <ListTable
      :columns="columns"
      :list="list"
    />
  </div>
</template>

<script>
import ListTable from '../components/ListTable.vue';
import usersAdapter from '@/adapters/usersAdapter2';

export default {
  name: 'ListTwo',

  data() {
    return {
      usersAdapter: new usersAdapter(),
      list: [],
      columns: [
        { id: 'id', label: 'ID' },
        { id: 'name', label: 'Имя' },
      ]
    }
  },

  async created() {
    this.list = await this.usersAdapter.getList();
  },

  components: {
    ListTable,
  },
}
</script>