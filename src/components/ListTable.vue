<template>
  <table class="list-table">
    <thead>
      <th 
        v-for="column in columns"
        :key="column.id"
      >
        {{ column.label }}
      </th>
    </thead>

    <tbody>
      <tr
        v-for="(row, index) in rows"
        :key="row.index"
      >
        <td
          v-for="(cell, cellIndex) in row"
          :key="`cell-${cellIndex}`"
        >
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ListTable',
  
  props: {
    columns: {
      type: Array,
      require: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    rows() {
      if (!this.list.length) {
        return [];
      }

      const rows = [];

      this.list.forEach(row => {
        const rowItem = {};

        this.columns.forEach(column => {
          rowItem[column.id] = row[column.id];
        });

        rows.push(rowItem);
      });

      return rows;
    }
  }
}
</script>

<style lang="scss">
.list-table {
  margin-left: auto;
  margin-right: auto;

  th, td {
    width: 100px;
    text-align: center;
  }
}
</style>