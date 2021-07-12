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
import APIAdapter from '/adapters/classAdapter';

export default {
  name: 'ListTwo',

  data() {
    return {
      APIAdapter: new APIAdapter(),
      list: [],
      columns: [
        { id: 'id', label: 'ID' },
        { id: 'name', label: 'Имя' },
      ]
    }
  },

  async created() {
    this.list = await this.APIAdapter.getList({
      limit: 6
    });
  },

  components: {
    ListTable,
  },
}
</script>