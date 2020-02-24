<template>
  <b-container class="bv-example-row p-3">
    <b-row>
      <b-col cols="12" md="12">
        <b-breadcrumb :items="breadcumbsItems"></b-breadcrumb>
        <b-form @submit="OnBtnSubmitClick" @submit.stop.prevent>
          <b-form-group id="config-name-1" label="Config Name:" label-for="config-name-1">
            <b-form-input
              id="config-name-1"
              v-model="datas.config_name"
              required
              placeholder="Enter config name"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="config-type-1" label="Config Type:" label-for="config-type-1">
            <b-form-select
              id="config-type-1"
              v-model="datas.config_type"
              required
            >
              <option v-for="configType in selectItems.itemsConfigType" :key="configType.config_type" :value="configType.config_type">{{ configType.config_type }}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="config-description-1" label="Config Description:" label-for="config-description-1">
            <b-form-textarea
              id="config-description-1"
              v-model="datas.config_description"
              required
              placeholder="Enter config description"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group id="config-res-1" label="Res 1:" label-for="config-res-1">
            <b-form-input
              id="config-res-1"
              v-model="datas.res_1"
              placeholder="Enter res 1"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="config-res-2" label="Res 2:" label-for="config-res-2">
            <b-form-input
              id="org-structure-res-2"
              v-model="datas.res_2"
              placeholder="Enter res 2"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="config-res-3" label="Res 3:" label-for="config-res-3">
            <b-form-input
              id="config-res-3"
              v-model="datas.res_3"
              placeholder="Enter res 3"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="config-res-4" label="Res 4:" label-for="config-res-4">
            <b-form-input
              id="config-res-4"
              v-model="datas.res_4"
              placeholder="Enter res 4"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="config-res-5" label="Res 5:" label-for="config-res-5">
            <b-form-input
              id="config-res-5"
              v-model="datas.res_5"
              placeholder="Enter res 5"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import configStructureService from '../../services/config.service'

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
        config_name: '',
        config_description: '',
        config_type: '',
        map_id: '',
        res_1: '',
        res_2: '',
        res_3: '',
        res_4: '',
        res_5: '',
      },
      selectItems: {
        itemsConfigType: [
          { id: 1, config_type: 'Data' },
          { id: 2, config_type: 'Kesatuan' },
        ],
      },
      breadcumbsItems: [
        {
          text: 'Data',
          href: '#',
        },
        {
          text: 'Configuration',
          to: '/config',
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
      configStructureService.add(this.datas).then(res => {
        this.$bvToast.toast(`Berhasil menambah data`, {
          title: 'Sukses',
          toaster: 'b-toaster-top-right',
          variant: 'success',
          solid: true,
          appendToast: true,
        })
        this.$router.push('/conifg')
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
}
</script>
