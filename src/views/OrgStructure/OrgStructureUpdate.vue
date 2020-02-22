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
          <b-form-group id="user-name-1" label="Username:" label-for="user-name-1">
            <b-form-input
              id="user-name-1"
              v-model="datas.username"
              required
              placeholder="Enter username"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="user-password-1" label="Password:" label-for="user-password-1">
            <b-form-input
              id="user-password-1"
              required
              placeholder="Enter password"
              type="password"
              v-model="datas.password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import userService from '../../services/user.service'
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
    getId () {
      return this.$route.params.id
    },
  },
  data () {
    return {
      datas: {
        user_number: '',
        user_fullname: '',
        user_nickname: '',
        user_type: '',
        // org_structure_id: '',
        username: '',
        password: '',
      },
      selectItems: {
        itemUserType: [{ text: 'Select One', value: null }],
        // itemOrgStructureId: [],
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
          text: 'Update',
          active: true,
        },
      ],
    }
  },
  methods: {
    OnBtnSubmitClick (evt) {
      evt.preventDefault()
      userService.update(this.getId, this.datas).then(res => {
        this.$bvToast.toast(`Berhasil memperbaharui data`, {
          title: 'Sukses',
          toaster: 'b-toaster-top-right',
          variant: 'success',
          solid: true,
          appendToast: true,
        })

        this.$router.push('/user')
      }).catch(error => {
        this.$bvToast.toast(error.response.data.message.errors[0].message, {
          title: 'Gagal memperbaharui data',
          toaster: 'b-toaster-top-right',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      })
    },

  },
  created () {
    userService.getById(this.getId).then(res => {
      this.datas.user_number = res.data.user_number
      this.datas.user_fullname = res.data.user_fullname
      this.datas.user_nickname = res.data.user_nickname
      this.datas.user_type = res.data.user_type
      this.datas.username = res.data.username
      this.datas.password = res.data.password
    })

    const conditiondConfig = '?config_type=kesatuan'
    configService.getByCondition(conditiondConfig).then(res => {
      this.selectItems.itemUserType = res.data
    })
  },
}
</script>
