<template>
  <b-container class="bv-example-row p-3">
    <b-row>
      <b-col cols="12" md="12">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <v-client-table ref="table"
          v-model="tableData"
          :columns="columns"
          :options="options">
          <a slot="update" slot-scope="props" :href="props.row.id">
            <b-button variant="success" size="sm"><b-icon-pencil></b-icon-pencil></b-button>
          </a>
          <a slot="delete" slot-scope="props" @click="OnDelete(props.row.id, props.index)">
            <b-button variant="danger" size="sm">
              <b-icon-trash></b-icon-trash>
            </b-button>
          </a>
        </v-client-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import poiService from '../../services/poi.service'

export default {
  data () {
    return {
      columns: ['id', 'poi_name', 'poi_address', 'poi_lon', 'poi_lat', 'poi_type', 'poi_description', 'createdAt', 'updatedAt', 'update', 'delete'],
      tableData: [],
      options: {
        headings: {
          id: 'ID',
          poi_name: 'Poi Name',
          poi_address: 'Poi Address',
          poi_lon: 'Poi Longitude',
          poi_lat: 'Poi Latitude',
          poi_type: 'Poi Type',
          poi_description: 'Poi Description',
          createdAt: 'Created Date',
          updatedAt: 'Updated Date',
          update: '',
          delete: '',
        },
        sortable: ['id', 'poi_name'],
        filterable: ['id', 'poi_name'],
      },
      items: [
        {
          text: 'Data',
          href: '#',
        },
        {
          text: 'Poi',
          active: true,
        },
      ],
    }
  },
  methods: {
    OnDelete (id, index) {
      this.$dialog.confirm('Apa anda yakin ingin menghapus data ini?').then(function (dialog) {
        poiService.deletePoi(id).then(res => {
          window.location.reload()
        })
      })
    },
  },
  created () {
    poiService.getAll().then(res => {
      this.tableData = res.data
    })
  },
}
</script>
<style>
.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
