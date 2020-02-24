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
import userService from '../../services/user.service'

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
      columns: ['id', 'user_number', 'user_fullname', 'user_nickname', 'user_type', 'org_structure_id', 'username', 'createdAt', 'updatedAt', 'update', 'delete'],
      tableData: [],
      options: {
        headings: {
          id: 'ID',
          user_number: 'User Number',
          user_fullname: 'User Fullname',
          user_nickname: 'User Nickname',
          user_type: 'User Type',
          org_structure_id: 'Org Structure ID',
          username: 'Username',
          createdAt: 'Created Date',
          updatedAt: 'Updated Date',
          update: '',
          delete: '',
        },
        sortable: ['id', 'user_number', 'user_fullname'],
        filterable: ['id', 'user_number', 'user_fullname'],
      },
      items: [
        {
          text: 'Data',
          href: '#',
        },
        {
          text: 'User',
          active: true,
        },
      ],
    }
  },
  methods: {
    OnBtnAddClick () {
      this.$router.push({ name: 'useradd' })
    },

    OnBtnDeleteClick (id) {
      this.$dialog.confirm('Apa anda yakin ingin menghapus data ini?').then(function (dialog) {
        userService.delete(id).then(res => {
          window.location.reload()
        })
      })
    },
    OnBtnUpdateClick (id) {
      this.$router.push({ name: 'userupdate', params: { id: id } })
    },
  },
  created () {
    userService.getAll().then(res => {
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
