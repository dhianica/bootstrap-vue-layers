<template>
  <b-container class="bv-example-row p-3">
    <b-row>
      <b-col cols="12" md="12">
        <b-breadcrumb :items="items"></b-breadcrumb>

        <a @click="OnBtnAddClick()">
          <b-button variant="success" size="md">Add<b-icon-plus></b-icon-plus></b-button>
        </a>
        <vue-ads-table
            :columns="columns"
            :rows="rows"
            :classes="classes"
            :filter="filter"
            :page="page"
            :selectable="selectable"
            @filter-change="filterChanged"
            @page-change="pageChanged"
            @selection-change="selectionChanged"
        >
            <template
                v-for="columnName in slottedColumns"
                :slot="columnName"
                slot-scope="props"
            >
            <a v-if="columnName == 'actionupdate'" @click="OnBtnUpdateClick(props.row.id)">
              <b-button variant="success" size="sm"><b-icon-pencil></b-icon-pencil></b-button>
            </a>
            <a v-if="columnName == 'actiondelete'" @click="OnBtnDeleteClick(props.row.id)">
              <b-button variant="danger" size="sm">
                <b-icon-trash></b-icon-trash>
              </b-button>
            </a>
            </template>
        </vue-ads-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import poiService from '../../services/poi.service'
import '../../../node_modules/vue-ads-table-tree/dist/vue-ads-table-tree.css'
import VueAdsTable from '../../components/TableContainer'
import defaultClasses from '../../services/defaultClasses'

export default {
  props: {
    classes: {
      type: Object,
      default: () => defaultClasses,
    },
  },
  components: {
    VueAdsTable,
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
  },
  data () {
    return {
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

      page: 0,
      filter: '',
      slottedColumns: [
        'actiondelete',
        'actionupdate',
      ],
      selectable: true,
      selectedRowIds: [],
      columns: [
        {
          property: 'id',
          title: 'ID',
          direction: null,
          filterable: true,
          collapseIcon: true,
        },
        {
          property: 'poi_name',
          title: 'Poi Name',
          direction: null,
          filterable: true,
        },
        {
          property: 'poi_address',
          title: 'Poi Address',
          direction: null,
          filterable: true,
        },
        {
          property: 'poi_lon',
          title: 'Longitude',
          direction: null,
          filterable: false,
        },
        {
          property: 'poi_lat',
          title: 'Latitude',
          direction: null,
          filterable: false,
        },
        {
          property: 'poi_type',
          title: 'Poi Type',
          direction: null,
          filterable: false,
        },
        {
          property: 'poi_description',
          title: 'Poi Description',
          direction: null,
          filterable: false,
        },
        {
          property: 'actionupdate',
          title: '',
        },
        {
          property: 'actiondelete',
          title: '',
        },
      ],
      rows: [],
    }
  },
  methods: {
    filterChanged (filter) {
      this.filter = filter
    },
    pageChanged (page) {
      this.page = page
    },
    selectionChanged (selectedRows) {
      this.selectedRowIds = selectedRows.map(row => row.id)
    },
    OnDelete (id, index) {
      this.$dialog.confirm('Apa anda yakin ingin menghapus data ini?').then(function (dialog) {
        poiService.delete(id).then(res => {
          window.location.reload()
        })
      })
    },
  },
  created () {
    poiService.getAll().then(res => {
      this.rows = res.data
    })
  },
}
</script>
