<template>
  <b-container class="bv-example-row p-3">
    <b-row>
      <b-col cols="12" md="12">
        <b-breadcrumb :items="breadcumbsItems"></b-breadcrumb>
        <b-form @submit="OnBtnSubmitClick" @submit.stop.prevent>

          <b-form-group id="org-structure-parent-id-1" label="Parent Organization Structure :" label-for="org-structure-parent-id-1">
            <b-form-select
              id="org-structure-parent-id-1"
              v-model="datas.parent_id"
              required
            >
              <option v-for="parentId in selectItems.ItemsParentId" :key="parentId.id" :value="parentId.id">{{ parentId.org_structure_name }}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="org-structure-name-1" label="Organization Structure Name:" label-for="org-structure-name-1">
            <b-form-input
              id="org-structure-name-1"
              v-model="datas.org_structure_name"
              required
              placeholder="Enter organization structure name"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="org-structure-description-1" label="Organization Structure Description:" label-for="org-structure-description-1">
            <b-form-textarea
              id="org-structure-description-1"
              v-model="datas.org_structure_description"
              required
              placeholder="Enter organization structure description"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group id="org-structure-map-id-1" label="Map Id:" label-for="org-structure-map-id-1">
            <b-form-select
              id="org-structure-map-id-1"
              v-model="datas.map_id"
              required
            >
              <option v-for="mapId in selectItems.ItemsMapId" :key="mapId.id" :value="mapId.id">{{ mapId.id }}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="org-structure-res-1" label="Res 1:" label-for="org-structure-res-1">
            <b-form-input
              id="org-structure-res-1"
              v-model="datas.res_1"
              required
              placeholder="Enter res 1"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="org-structure-res-2" label="Res 2:" label-for="org-structure-res-2">
            <b-form-input
              id="org-structure-res-2"
              v-model="datas.res_2"
              required
              placeholder="Enter res 2"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="org-structure-res-3" label="Res 3:" label-for="org-structure-res-3">
            <b-form-input
              id="org-structure-res-3"
              v-model="datas.res_3"
              required
              placeholder="Enter res 3"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="org-structure-res-4" label="Res 4:" label-for="org-structure-res-4">
            <b-form-input
              id="org-structure-res-4"
              v-model="datas.res_4"
              required
              placeholder="Enter res 4"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="org-structure-res-5" label="Res 5:" label-for="org-structure-res-5">
            <b-form-input
              id="org-structure-res-5"
              v-model="datas.res_5"
              required
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
// import userService from '../../services/user.service'
import orgStructureService from '../../services/orgstructure.service'

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
        parent_id: '',
        org_structure_name: '',
        org_structure_description: '',
        map_id: '',
        res_1: '',
        res_2: '',
        res_3: '',
        res_4: '',
        res_5: '',
      },
      selectItems: {
        itemsParentId: [{ text: 'Select One', value: null }],
        itemsMapId: [{ text: 'Select One', value: null }],
      },
      breadcumbsItems: [
        {
          text: 'Data',
          href: '#',
        },
        {
          text: 'Organization Structure',
          to: '/orgstructure',
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
      orgStructureService.add(this.datas).then(res => {
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
    const conditiondConfig = '?parent_id=null'
    orgStructureService.getByCondition(conditiondConfig).then(res => {
      this.selectItems.itemsParentId = res.data
    })
  },
}
</script>
