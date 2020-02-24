<template>
  <b-container class="bv-example-row p-3">
    <b-row>
      <b-col cols="12" md="12">
        <b-breadcrumb :items="items"></b-breadcrumb>

        <a @click="OnBtnAddClick()">
          <b-button variant="success" size="md">Add<b-icon-plus></b-icon-plus></b-button>
        </a>
        <v-client-table ref="table"
          v-model="tableData"
          :columns="columns"
          :options="options">
          <a slot="update" slot-scope="props" @click="OnBtnUpdateClick(props.row.id)">
            <b-button variant="success" size="sm"><b-icon-pencil></b-icon-pencil></b-button>
          </a>
          <a slot="delete" slot-scope="props" @click="OnBtnDeleteClick(props.row.id)">
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
import configService from '../../services/config.service'

export default {
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
      columns: ['id', 'config_name', 'config_type', 'config_description', 'res_1', 'res_2', 'res_3', 'res_4', 'res_5', 'createdAt', 'updatedAt', 'update', 'delete'],
      tableData: [],
      options: {
        headings: {
          id: 'ID',
          config_name: 'Config Name',
          config_type: 'Config Type',
          config_description: 'Config Description',
          res_1: 'Res 1',
          res_2: 'Res 2',
          res_3: 'Res 3',
          res_4: 'Res 4',
          res_5: 'Res 5',
          createdAt: 'Created Date',
          updatedAt: 'Updated Date',
          update: '',
          delete: '',
        },
        sortable: ['id', 'config_name'],
        filterable: ['id', 'config_name'],
      },
      items: [
        {
          text: 'Data',
          href: '#',
        },
        {
          text: 'Configuration',
          active: true,
        },
      ],
    }
  },
  methods: {
    OnBtnAddClick () {
      this.$router.push({ name: 'configadd' })
    },

    OnBtnDeleteClick (id) {
      this.$dialog.confirm('Apa anda yakin ingin menghapus data ini?').then(function (dialog) {
        configService.delete(id).then(res => {
          window.location.reload()
        })
      })
    },
    OnBtnUpdateClick (id) {
      this.$router.push({ name: 'configupdate', params: { id: id } })
    },
  },
  created () {
    configService.getAll().then(res => {
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
