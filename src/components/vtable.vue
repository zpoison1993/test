<template>
  <div class="customers container p-3">
    <h1 class="page-header p-3">Таблица пользователей</h1>
   

    <table class="table table-striped">
      <thead>
        <tr >
          <th v-for="columnItem in columns" v-bind:key="columnItem.id">{{columnItem.caption}}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row,index) in rows" v-bind:key="row[keyFromColumnsToRows[1]]">
          <td>{{row[keyFromColumnsToRows[0]]}}</td>
          <td>{{dateConverter[index]}}</td>
          <td>{{row[keyFromColumnsToRows[2]] | countryFilter(countries)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CountriesCODES from '../Countries.JSON';

export default {
  name: "vtable",
  data() {
    return {
      countries: CountriesCODES,
      columns: [
        {caption: 'ФИО', id: 'fio'}, {caption: 'Дата рождения', id: 'dob', template: 'date'}, {caption: 'Страна проживания', id: 'country', template: 'country'}
      ],
      rows: [
        {fio: 'Дэйв Харрисон', dob: 730166400, country: 'us'},
        {fio: 'Лоза Юрий Эдуардович', dob: -502243200, country: 'ru'},
        {fio: 'Меркель Ангела', dob: -487900800, country: 'de'},
        {fio: 'Назарбаев Нурсултан Абишевич', dob: -930614400, country: 'kz'}
      ]
    };
  },
  filters: {
    // Matches country code to its full name
    countryFilter: function(codeCountry,countries) {
      const countryName = countries.find(el => 
        el.code === codeCountry.toUpperCase()
      );
      return countryName.name;
    }
  },
  methods: {   
  },
  computed: {
    // Retrieves key names for row elements depending on columns data
   keyFromColumnsToRows: function () {
      const valuesFromColumns = this.columns.map( el =>
        Object.values(el)[1]
      );
      return (valuesFromColumns);  
     
    },
    // Converts date from unix timestamp to JS Date Object
    dateConverter: function() {
      let dateStd = this.rows.map(row => 
      new Date(row[this.keyFromColumnsToRows[1]]*1000).toLocaleDateString('ru-RU') )
      return dateStd
    },

    
  },
  props: {},
  components: {
  }
  
};
</script>

<!-- Scoped Styles -->
<style scoped>
  .sort-container {
    width: 80%;
    display:flex;
    justify-content: space-between;
    margin: 2rem 0;
  }
</style>
