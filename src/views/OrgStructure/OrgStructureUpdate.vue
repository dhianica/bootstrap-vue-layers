<template>
  <b-container class="bv-example-row p-3">
    <b-row>
      <b-col cols="12" md="12">
        <b-breadcrumb :items="breadcumbsItems"></b-breadcrumb>
        <b-form @submit="OnBtnSubmitClick" @submit.stop.prevent>
          <b-form-group id="org-structure-parent-id-1" label="Parent Organization Structure :" label-for="org-structure-parent-id-1">
            <treeselect
              :options="selectItems.itemsParentId"
              v-model="datas.parent_id"
              :searchable="true"
              :show-count="true"
              :default-expand-level="1"
              >
              <label slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }" :class="labelClassName">
                {{ node.label }}
                <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
              </label>
            </treeselect>
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
              id="user-type-1"
              v-model="datas.map_id"
              required
            >
              <option v-for="MapId in selectItems.itemsMapId" :key="MapId.id" :value="MapId.id">{{ MapId.config_name }}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="org-structure-res-1" label="Res 1:" label-for="org-structure-res-1">
            <b-form-input
              id="org-structure-res-1"
              v-model="datas.res_1"
              placeholder="Enter res 1"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="org-structure-res-2" label="Res 2:" label-for="org-structure-res-2">
            <b-form-input
              id="org-structure-res-2"
              v-model="datas.res_2"
              placeholder="Enter res 2"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="org-structure-res-3" label="Res 3:" label-for="org-structure-res-3">
            <b-form-input
              id="org-structure-res-3"
              v-model="datas.res_3"
              placeholder="Enter res 3"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="org-structure-res-4" label="Res 4:" label-for="org-structure-res-4">
            <b-form-input
              id="org-structure-res-4"
              v-model="datas.res_4"
              placeholder="Enter res 4"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="org-structure-res-5" label="Res 5:" label-for="org-structure-res-5">
            <b-form-input
              id="org-structure-res-5"
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
// import the component
import Treeselect from '@riophae/vue-treeselect'
// // import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import orgStructureService from '../../services/orgstructure.service'
import configStructureService from '../../services/config.service'
import utils from '../../utils/utils'

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
    getId () {
      return this.$route.params.id
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
        itemsParentId: [],
        itemsMapId: [],
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
          text: 'Update',
          active: true,
        },
      ],
    }
  },
  methods: {
    OnBtnSubmitClick (evt) {
      evt.preventDefault()
      orgStructureService.update(this.getId, this.datas).then(res => {
        this.$bvToast.toast(`Berhasil memperbaharui data`, {
          title: 'Sukses',
          toaster: 'b-toaster-top-right',
          variant: 'success',
          solid: true,
          appendToast: true,
        })
        this.$router.push('/orgstructure')
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
    orgStructureService.getAll().then(res => {
      const datas = []
      res.data.forEach(element => {
        datas.push({ id: element.id, label: element.org_structure_name, parent_id: element.parent_id })
      })
      const treeDatas = utils.createTreeJsonObject(datas)
      this.selectItems.itemsParentId = treeDatas
    })

    const conditionMapId = '?res_1=1'
    configStructureService.getByCondition(conditionMapId).then(res => {
      this.selectItems.itemsMapId = res.data
    })

    orgStructureService.getById(this.getId).then(res => {
      this.datas.parent_id = res.data.parent_id
      this.datas.org_structure_name = res.data.org_structure_name
      this.datas.org_structure_description = res.data.org_structure_description
      this.datas.map_id = res.data.map_id
      this.datas.res_1 = res.data.res_1
      this.datas.res_2 = res.data.res_2
      this.datas.res_3 = res.data.res_3
      this.datas.res_4 = res.data.res_4
      this.datas.res_5 = res.data.res_5
    })
  },
}
</script>
