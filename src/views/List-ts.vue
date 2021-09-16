<template>
  <div class="list">
    <ListTable
      :columns="columns"
      :list="list"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ListTable from '@/components/ListTable.vue';
import Adapter from '@/adapters/adapter';
import { IUser, IColumn } from '@/types/interfaces';

@Component({
  components: {
    ListTable,
  }
})

export default class ListTS extends Vue {
  list: IUser[] = [];
  
  columns: IColumn[] = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Имя' },
  ];

  created() {
    this.getList();
  }

  async getList(): Promise<void> {
    const usersAdapter = new Adapter();
    this.list = await usersAdapter.getList();
  }
}
</script>