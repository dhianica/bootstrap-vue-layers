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
import '../../../node_modules/vue-ads-table-tree/dist/vue-ads-table-tree.css'
import orgStructure from '../../services/orgstructure.service'
import VueAdsTable from '../../components/TableContainer'
import defaultClasses from '../../services/defaultClasses'

export default {
  name: 'OrgStructure',
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
          text: 'Organization Structure',
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
          property: 'parent_id',
          title: 'Parent ID',
          direction: null,
          filterable: false,
        },
        {
          property: 'org_structure_name',
          title: 'Organization Structure Name',
          direction: null,
          filterable: true,
        },
        {
          property: 'org_structure_description',
          title: 'Organization Structure Description',
          direction: null,
          filterable: false,
        },
        {
          property: 'map_id',
          title: 'Map ID',
          direction: null,
          filterable: false,
        },
        {
          property: 'res_1',
          title: 'Res 1',
          direction: null,
          filterable: false,
        },
        {
          property: 'res_2',
          title: 'Res 2',
          direction: null,
          filterable: false,
        },
        {
          property: 'res_3',
          title: 'Res 3',
          direction: null,
          filterable: false,
        },
        {
          property: 'res_4',
          title: 'Res 4',
          direction: null,
          filterable: false,
        },
        {
          property: 'res_5',
          title: 'Res 5',
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

    OnBtnAddClick () {
      this.$router.push({ name: 'orgstructureadd' })
    },

    OnBtnDeleteClick (id) {
      this.$dialog.confirm('Apa anda yakin ingin menghapus data ini?').then(function (dialog) {
        orgStructure.delete(id).then(res => {
          window.location.reload()
        })
      })
    },
    OnBtnUpdateClick (id) {
      this.$router.push({ name: 'orgstructureupdate', params: { id: id } })
    },
  },
  created () {
    const condition = '?isTree=1'
    orgStructure.getByCondition(condition).then(res => {
      this.rows = res.data
    })
  },
}
</script>
