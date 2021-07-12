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
import APIAdapter from '/adapters/adapter';

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
    this.list = await APIAdapter.getList({
      limit: 6
    });
  },

  components: {
    ListTable,
  },
}
</script>