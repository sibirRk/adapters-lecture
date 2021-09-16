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
    this.sendRequest();
  },

  methods: {
    sendRequest() {
      let filters = {
        dateFrom: dateParse(this.filterData.dateFrom),
        dateTo: dateParse(this.filterData.dateTo),
        user_bon: this.filterData.currentUser,
      };
      
      for (let prop in filters) {
        if(!filters[prop]) {
          delete filters[prop];
        }
      }
    
      this.loading = true;
      
      let requestData = {
        appPaginator: 'dilleraccrual',
        data: {
          page: number,
          filtered: filters
        }
      };

      axios.post('/rest/', requestData)
        .then(response => {
          this.bonuses = response.data.data;
          this.page = number;
          this.paginator = response.data.paginator;
          this.loading = false;
        });
    }
  },

  components: {
    ListTable,
  },
}
</script>