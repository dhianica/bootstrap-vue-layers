<template>
  <b-container class="bv-example-row p-3">
    <b-row>
      <b-col cols="12" md="12">
        <b-breadcrumb :items="breadcumbsItems"></b-breadcrumb>
        <b-form @submit="OnBtnSubmitClick" @submit.stop.prevent>
          <b-form-group id="user-number-1" label="User Number:" label-for="user-number-1">
            <b-form-input
              id="user-number-1"
              v-model="datas.user_number"
              required
              placeholder="Enter number"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="user-fullname-1" label="User Fullname:" label-for="user-fullname-1">
            <b-form-input
              id="user-fullname-1"
              v-model="datas.user_fullname"
              required
              placeholder="Enter fullname"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="user-nickname-1" label="User Nickname:" label-for="user-nickname-1">
            <b-form-input
              id="user-nickname-1"
              v-model="datas.user_nickname"
              required
              placeholder="Enter nickname"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="user-type-1" label="Type:" label-for="user-type-1">
            <b-form-select
              id="user-type-1"
              v-model="datas.user_type"
              required
            >
              <option v-for="userType in selectItems.itemUserType" :key="userType.id" :value="userType.id">{{ userType.config_name }}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="org-structure-id-1" label="Parent Organization Structure :" label-for="org-structure-id-1">
            <treeselect
              :options="selectItems.itemsOrgStructureId"
              v-model="datas.org_structure_id"
              :searchable="true"
              :show-count="true"
              :normalizer="selectItems.normalizer"
              >
              <label slot="option-org_structure_name" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }" :class="labelClassName">
                {{ node.label }}
                <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
              </label>
            </treeselect>
          </b-form-group>
          <b-form-group id="user-name-1" label="Username:" label-for="user-name-1">
            <b-form-input
              id="user-name-1"
              v-model="datas.username"
              required
              placeholder="Enter username"
              autocomplete="off"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="user-password-1" label="Password:" label-for="user-password-1">
            <b-form-input
              id="user-password-1"
              required
              placeholder="Enter password"
              type="password"
              v-model="datas.password"
              autocomplete="off"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import the component
import Treeselect from '@riophae/vue-treeselect'
// // import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import userService from '../../services/user.service'
import configService from '../../services/config.service'
import orgStructureService from '../../services/orgstructure.service'

export default {
  components: { Treeselect },
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
      datas: {
        user_number: '',
        user_fullname: '',
        user_nickname: '',
        user_type: '',
        org_structure_id: 0,
        username: '',
        password: '',
      },
      selectItems: {
        itemUserType: [{ text: 'Select One', value: null }],
        itemsOrgStructureId: [],
        normalizer (node) {
          return {
            id: node.id,
            label: node.org_structure_name,
            children: node._children,
          }
        },
      },
      breadcumbsItems: [
        {
          text: 'Data',
          href: '#',
        },
        {
          text: 'User',
          to: '/user',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    }
  },
  methods: {
    OnBtnSubmitClick (evt) {
      evt.preventDefault()
      userService.add(this.datas).then(res => {
        this.$bvToast.toast(`Berhasil menambah data`, {
          title: 'Sukses',
          toaster: 'b-toaster-top-right',
          variant: 'success',
          solid: true,
          appendToast: true,
        })
        this.$router.push('/user')
      }).catch(error => {
        this.$bvToast.toast(error.response.data.message.errors[0].message, {
          title: 'Gagal menambah data',
          toaster: 'b-toaster-top-right',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      })
    },
  },
  created () {
    const conditiondConfig = '?config_type=kesatuan'
    configService.getByCondition(conditiondConfig).then(res => {
      this.selectItems.itemUserType = res.data
    })

    const conditiondOrgStructure = '?isTree=1'
    orgStructureService.getByCondition(conditiondOrgStructure).then(res => {
      // let all = { id: 0, label: 'All' }
      // this.selectItems.itemsOrgStructureId = Object.assign({}, all)
      // let datas = { ...this.selectItems.itemsOrgStructureId }
      // res.data.unshift(datas)
      this.selectItems.itemsOrgStructureId = res.data
      // this.selectItems.itemsOrgStructureId.unshift(datas)
      // console.log(this.selectItems.itemsOrgStructureId)
    })
  },
}
</script>
