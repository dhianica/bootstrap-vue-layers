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
  },
  data () {
    return {
      datas: {
        user_number: '',
        user_fullname: '',
        user_nickname: '',
        user_type: '',
        username: '',
        password: '',
      },
      selectItems: {
        itemUserType: [{ text: 'Select One', value: null }],
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
  },
}
</script>
