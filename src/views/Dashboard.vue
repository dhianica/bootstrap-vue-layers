<template xmlns:>
  <div id="app">
    <ul class="nav nav-bar nav-justified nav-pills nav-fill">
      <li class="nav-item" v-for="tabs in tabsItem" :key="tabs.data.id" :id="tabs.data.id">
        <a class="nav-link" @click.prevent="setActive(tabs)" :class="{ active: isActive(tabs) }" :href="'#' + tabs.data.id">{{ tabs.data.config_name }}</a>
      </li>
    </ul>

    <div class="absolute-top-left d-flex bd-highlight pl-7">
      <b-button squared v-b-toggle.div-filter class="mr-auto filter btn-default"><font-awesome-icon icon="filter" /></b-button>
    </div>
    <b-collapse id="div-filter" class="absolute-top-left" role="tabpanel" accordion="my-accordion">
      <b-card>
        <b-form inline>
          <b-form-group
            label-cols-sm="5"
            label-cols-lg="3"
            label="From:"
            label-for="input-date-from">
            <b-form-input type="date" id="input-date-from"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="5"
            label-cols-lg="3"
            label="To:"
            label-for="input-date-to">
            <b-form-input type="date" id="input-date-to"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="6"
            label-cols-lg="5"
            label="Rating"
            label-for="select-rating">
            <b-form-select
              id="select-rating"
              name="rating-options"
            >
              <b-form-select-option  size="lg" value="all">All</b-form-select-option>
              <b-form-select-option  size="lg" value="u10">Under 10</b-form-select-option>
              <b-form-select-option  size="lg" value="10-20">10 - 20</b-form-select-option>
              <b-form-select-option  size="lg" value="20-40">20 - 40</b-form-select-option>
              <b-form-select-option  size="lg" value="40-60">40 - 60</b-form-select-option>
              <b-form-select-option  size="lg" value="60-80">60 - 80</b-form-select-option>
              <b-form-select-option  size="lg" value="80-100">80 - 100</b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group
            label-cols-sm="6"
            label-cols-lg="5"
            label="Province"
            label-for="select-province">
            <b-form-select
                @change="selectedProvince"
                id="org-structure-1"
                v-model="filters.org_structure"
                required
                style="min-width:100px"
              >
                <option v-for="OrgStructure in selectItems.itemsOrgStructure" :key="OrgStructure.id" :value="OrgStructure.id">{{ OrgStructure.org_structure_name }}</option>
              </b-form-select>
          </b-form-group>

          <b-form-group
            v-if="IscurrentProvince"
            label-cols-sm="6"
            label-cols-lg="5"
            label="Wilayah"
            label-for="select-wilayah">
            <b-form-select
                id="org-structure-detail-1"
                v-model="filters.org_structure_detail"
                required
                style="min-width:100px"
              >
                <option v-for="OrgStructureDetail in selectItems.itemsOrgStructureDetail" :key="OrgStructureDetail.id" :value="OrgStructureDetail.id">{{ OrgStructureDetail.org_structure_name }}</option>
              </b-form-select>
          </b-form-group>

          <b-button style="margin-top:35px;" type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-collapse>
    <div class="absolute-top-right d-flex bd-highlight pr-5">
      <b-button squared v-b-toggle.div-list-data class="mr-auto filter btn-default"><font-awesome-icon icon="file-alt" /></b-button>
    </div>
    <b-collapse class="absolute-top-right w-25" id="div-list-data">
      <b-card right-align class="overflow-auto ml-auto" style="max-height:700px">
        <b-card no-body class="overflow-hidden mb-3" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden mb-3" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden mb-3" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden mb-3" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden mb-3" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card>
    </b-collapse>

    <vl-map class="map" ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
            data-projection="EPSG:4326">
      <vl-view ref="view" :center.sync="center" :zoom.sync="zoom" :rotation.sync="rotation"></vl-view>
      <vl-interaction-select :features.sync="selectedFeatures" v-if="drawType == null">
        <template slot-scope="select">
          <vl-overlay class="feature-popup" v-for="feature in select.features" :key="feature.id" :id="feature.id"
                      :position="pointOnSurface(feature.geometry)" :auto-pan="true" :auto-pan-animation="{ duration: 300 }">
            <template v-if="isCorona">
              <b-card title="Data" :sub-title="feature.properties.name">
                <span> Jumlah Positif : </span> {{ feature.properties.kasusPosi }} <br>
                <span> Jumlah Sembuh   : </span> {{ feature.properties.kasusSemb }} <br>
                <span> Jumlah Meninggal : </span> {{ feature.properties.kasusMeni }} <br>
                <!-- <b-table :items="items" :fields="fieldsItem">
                </b-table> -->
              </b-card>
            </template>
            <template v-else>
                <b-card title="Data" :sub-title="feature.properties.name">
                <b-table :items="items" :fields="fieldsItem">
                </b-table>
              </b-card>
            </template>
          </vl-overlay>
        </template>
      </vl-interaction-select>

      <vl-layer-tile v-if="isCorona">
        <vl-source-bingmaps v-bind="baseLayers"></vl-source-bingmaps>
      </vl-layer-tile>
      <vl-layer-tile v-else>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-vector>
        <vl-source-vector :features.sync="features">
        </vl-source-vector>
        <vl-style-func :factory="styleFuncProp" />
        <template slot-scope="feature">
          <vl-overlay v-if="feature.geometry" :position="pointOnSurface(feature.geometry)" :offset="[10, 10]">
            <p class="is-light box content">
              Always opened overlay for Feature ID <strong>{{ feature.id }}</strong>
            </p>
          </vl-overlay>
        </template>
      </vl-layer-vector>



    </vl-map>
  </div>
</template>

<script>
import { camelCase } from 'lodash'
import { createProj, addProj, findPointOnSurface, createStyle } from 'vuelayers/lib/ol-ext'
// import { Fill, Circle } from 'ol/style/'
import orgStructureService from '../services/orgstructure.service'
import configService from '../services/config.service'
import mapService from '../services/map.service'
import axios from 'axios'
import utils from '../utils/utils'

const apiCorona = 'https://indonesia-covid-19.mathdro.id/api/provinsi'

let imageExtent = [10018754.172321, -1247452.3022878, 16280475.529441, 1257236.2405602]
let customProj = createProj({
  code: 'xkcd-image',
  units: 'pixels',
  extent: imageExtent,
})
addProj(customProj)

export default {
  name: 'vl-dashboard-app',
  mounted () {
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    getCurrentOrgStructureId () {
      const user = JSON.parse(localStorage.getItem('user'))
      return user.data.org_structure_id
    },
    getCurrentMapId () {
      const user = JSON.parse(localStorage.getItem('user'))
      return user.data.map_id
    },
    getCurrentParentId () {
      const user = JSON.parse(localStorage.getItem('user'))
      return user.data.parent_id
    },
    activeTabs () {
      return this.tabsItem.filter(tab => {
        return tab.data.isActive
      })
    },
  },
  methods: {
    camelCase,
    pointOnSurface: findPointOnSurface,
    styleFuncProp () {
      const Colors = {}
      return (feature, resolution) => {
        const isStyle = feature.getStyle()
        const isStyleFunction = feature.getStyleFunction()
        if (!isStyle && !isStyleFunction) {
          if (this.isCorona) {
            Colors.names = {
              darkgreen: '#006400',
              darkolivegreen: '#556b2f',
              darkorange: '#ff8c00',
              green: '#008000',
              maroon: '#800000',
              orange: '#ffa500',
              yellow: '#ffff00',
            }

            Colors.color = function () {
              let result
              if (feature.getProperties().kasusPosi > 100) {
                result = this.names.maroon
              } else if (feature.getProperties().kasusPosi <= 100 && feature.getProperties().kasusPosi > 80) {
                result = this.names.darkorange
              } else if (feature.getProperties().kasusPosi <= 80 && feature.getProperties().kasusPosi > 60) {
                result = this.names.orange
              } else if (feature.getProperties().kasusPosi <= 60 && feature.getProperties().kasusPosi > 40) {
                result = this.names.yellow
              } else if (feature.getProperties().kasusPosi <= 40 && feature.getProperties().kasusPosi > 20) {
                result = this.names.darkgreen
              } else if (feature.getProperties().kasusPosi <= 20) {
                result = this.names.green
              }
              return { name: result }
            }
            let styles = [
              createStyle({
                imageRadius: (feature.getProperties().kasusPosi / 100) < 10 ? 15 : feature.getProperties().kasusPosi / 100,
                strokeWidth: 0.8,
                fillColor: Colors.color().name,
                text: feature.getProperties().name,
                font: '10px sans-serif',
                scale: 2,
              }),
            ]
            feature.setStyle(styles)
            return styles
          } else {
            Colors.names = {
              darkgreen: '#006400',
              darkolivegreen: '#556b2f',
              darkorange: '#ff8c00',
              green: '#008000',
              maroon: '#800000',
              orange: '#ffa500',
              yellow: '#ffff00',
            }

            Colors.random = function () {
              let result
              let count = 0
              for (let prop in this.names) {
                if (Math.random() < 1 / ++count) {
                  result = prop
                }
              }
              return { name: result, rgb: this.names[result] }
            }
            let styles = [
              createStyle({
                strokeWidth: 0.8,
                fillColor: Colors.random().rgb,
                text: feature.getProperties().name,
                font: '10px sans-serif',
                scale: 2,
              }),
            ]
            feature.setStyle(styles)
            return styles
          }
        }
      }
    },
    selectedProvince () {
      if (this.filters.org_structure === 0) {
        this.IscurrentProvince = false
      } else {
        console.log(this.filters.org_structure)
        const conditionGetParentOrgStructure = '?parent_id=' + this.filters.org_structure
        orgStructureService.getByCondition(conditionGetParentOrgStructure).then(res => {
          if (res.data.length < 1) {
            this.IscurrentProvince = false
          } else {
            this.IscurrentProvince = true
            const datas = []
            res.data.forEach(element => {
              datas.push({ id: element.map_id, org_structure_name: element.org_structure_name })
            })
            this.selectItems.itemsOrgStructureDetail = datas
          }
        })
      }
    },
    isActive (tabs) {
      this.activeTabItem = tabs
      return this.activeItem === tabs.data.id
    },
    loadFeatures (tabs) {
      let conditionGetMapSpatial = null
      if (this.getCurrentOrgStructureId === 0) {
        if (tabs.res_2 === 0 || tabs.res_2 === '' || tabs.res_2 === null || tabs.res_2 === undefined) {
          if (tabs.res_3 === 1 || tabs.res_3 === '1') {
            conditionGetMapSpatial = '?parent_id=0&res_1=' + tabs.res_1 + '&point=1'
          } else {
            conditionGetMapSpatial = '?parent_id=0&res_1=' + tabs.res_1
          }
        } else {
          conditionGetMapSpatial = '?res_1=' + tabs.res_1 + '&res_2=' + tabs.res_2
        }
      } else {
        if (tabs.res_2 === 0 || tabs.res_2 === '' || tabs.res_2 === null || tabs.res_2 === undefined) {
          conditionGetMapSpatial = '?map_id=' + this.getCurrentMapId + '&res_1=' + tabs.res_1
        } else {
          conditionGetMapSpatial = '?parent_id=' + this.getCurrentMapId + '&res_1=' + tabs.res_1 + '&res_2=' + tabs.res_2
        }
      }
      return new Promise(resolve => {
        mapService.getByCondition(conditionGetMapSpatial).then(res => {
          if (res.data.length < 1) {
            this.features = []
          } else {
            const datas = []
            res.data.forEach(element => {
              let feature = {
                id: element.map_id,
                type: 'Feature',
                geometry: element.map_spatial,
                properties: {
                  name: element.org_structure_name,
                },
              }
              datas.push(feature)
            })
            resolve(datas)
          }
        })
      })
    },
    setActive (tabs) {
      this.loadFeatures(tabs.data).then(features => {
        if (tabs.data.res_3 === 1 || tabs.data.res_3 === '1') {
          this.isCorona = true
          axios.get(apiCorona).then(res => {
            if (res.data.length < 0) {
              this.coronaDatas = []
            } else {
              this.coronaDatas = res.data.data
              this.features = utils.mergeDataObject(features.map(Object.freeze), res.data.data)
            }
          })
        } else {
          this.isCorona = false
          this.features = features.map(Object.freeze)
        }
      })

      this.activeItem = tabs.data.id
      tabs.data.isActive = true
      this.tabsItem.forEach(el => {
        if (el.data.id !== tabs.data.id) {
          el.data.isActive = false
        }
      })
      return this.tabsItem
    },
  },
  data () {
    return {
      baseLayers: {
        name: 'bingmaps',
        title: 'Bing Maps',
        apiKey: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
        imagerySet: 'CanvasGray',
        visible: true,
      },
      mapVisible: '',
      activeItem: '',
      IscurrentProvince: false,
      center: [115.90631268750555, -1.8963730925758129],
      zoom: 5,
      rotation: 0,
      selectedFeatures: [],
      drawType: undefined,
      fieldsItem: ['Tipe', 'Nama', 'Rating'],
      items: [
        { Tipe: 1, Nama: 'Dickerson', Rating: 5 },
        { Tipe: 1, Nama: 'Larsen', Rating: 4 },
        { Tipe: 1, Nama: 'Geneva', Rating: 3 },
      ],
      tabsItem: [],
      selectItems: {
        itemsOrgStructure: [],
        itemsOrgStructureDetail: [],
      },
      filters: {
        org_structure: '',
      },
      features: [],
      activeTabItem: null,
      coronaDatas: [],
      isCorona: false,
    }
  },
  created () {
    let conditionGetParentOrgStructure = ''
    if (this.getCurrentOrgStructureId === 0) {
      conditionGetParentOrgStructure = '?parent_id=' + this.getCurrentOrgStructureId
    } else {
      conditionGetParentOrgStructure = '?id=' + this.getCurrentOrgStructureId
    }
    orgStructureService.getByCondition(conditionGetParentOrgStructure).then(res => {
      const datas = [
        {
          id: 0,
          org_structure_name: 'All',
        },
      ]
      res.data.forEach(element => {
        datas.push({ id: element.map_id, org_structure_name: element.org_structure_name })
      })
      this.selectItems.itemsOrgStructure = datas
    })

    const conditionGetMap = '?res_1=1'
    configService.getByCondition(conditionGetMap).then(res => {
      let element = null
      const datas = []
      let i = 0
      res.data.forEach(el => {
        if (i === 0) {
          element = el
          this.activeItem = el.id
          el.isActive = true
        } else {
          el.isActive = false
        }
        datas.push({ data: el })
        i++
      })

      this.loadFeatures(element).then(features => {
        if (element.res_3 === 1 || element.res_3 === '1') {
          this.isCorona = true
          axios.get(apiCorona).then(res => {
            if (res.data.length < 0) {
              this.coronaDatas = []
            } else {
              this.coronaDatas = res.data.data
              this.features = utils.mergeDataObject(features.map(Object.freeze), res.data.data)
            }
          })
        } else {
          this.isCorona = false
          this.features = features.map(Object.freeze)
        }
      })
      this.tabsItem = datas
    })
  },
}
</script>

<style scoped>
  a {
    color: #5D5A58 !important;
  }

  .nav-pills {
      color: #fff !important;
      background-color: #e9ecef !important;
      border: 1px;
  }

  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
      color: #4C4A48 !important;
      font-weight: 700;
      background-color: transparent !important;
  }

  .nav-item {
    border: 0.5px solid #4C4A48 !important;
  }

  .card-body {
    padding: 0.4rem;
  }
  .pl-6 {
    padding-left: 5rem !important;
  }
  .pl-7 {
    padding-left: 6rem !important;
  }
  .pl-8 {
    padding-left: 9rem !important;
  }
  .pl-9 {
    padding-left: 11rem !important;
  }
  .pr-6 {
    padding-right: 5rem !important;
  }
  .pr-7 {
    padding-right: 7rem !important;
  }
  .pr-8 {
    padding-right: 9rem !important;
  }
  .pr-9 {
    padding-right: 11rem !important;
  }

  .my-6 {
    top: 5rem !important;
  }

  .my-7 {
    top: 9rem !important;
  }

  .my-8 {
    top: 11rem !important;
  }

  .my-9 {
    top: 14rem !important;
  }

  .my-10 {
    top: 16rem !important;
  }

  .my-11 {
    top: 19rem !important;
  }

  .my-12 {
    top: 22rem !important;
  }

  .my-13 {
    top: 25rem !important;
  }

  .btn-arrow-right,
  .btn-arrow-left {
      position: relative;
      padding-left: 18px;
      padding-right: 18px;
  }
  .btn-arrow-right {
      padding-left: 36px;
  }
  .btn-arrow-left {
      padding-right: 36px;
  }
  .btn-arrow-right:before,
  .btn-arrow-right:after,
  .btn-arrow-left:before,
  .btn-arrow-left:after { /* make two squares (before and after), looking similar to the button */
      content:"";
      position: absolute;
      top: 7px; /* move it down because of rounded corners */
      width: 22px; /* same as height */
      height: 22px; /* button_outer_height / sqrt(2) */
      background: inherit; /* use parent background */
      border: inherit; /* use parent border */
      border-left-color: transparent; /* hide left border */
      border-bottom-color: transparent; /* hide bottom border */
  }

  .btn-arrow-right:before,
  .btn-arrow-right:after {
      transform: rotate(45deg); /* rotate right arrow squares 45 deg to point right */
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
  }
  .btn-arrow-left:before,
  .btn-arrow-left:after {
      transform: rotate(225deg); /* rotate left arrow squares 225 deg to point left */
      -webkit-transform: rotate(225deg);
      -moz-transform: rotate(225deg);
      -o-transform: rotate(225deg);
      -ms-transform: rotate(225deg);
  }
  .btn-arrow-right:before,
  .btn-arrow-left:before { /* align the "before" square to the left */
      left: -11px;
  }
  .btn-arrow-right:after,
  .btn-arrow-left:after { /* align the "after" square to the right */
      right: -11px;
  }
  .btn-arrow-right:after,
  .btn-arrow-left:before { /* bring arrow pointers to front */
      z-index: 1;
  }
  .btn-arrow-right:before,
  .btn-arrow-left:after { /* hide arrow tails background */
      background-color: white;
  }

  .fixed-top-left {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1030;
  }

  .fixed-top-right {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1030;
  }

  .absolute-top-left {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
  }

  .absolute-top-right {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1030;
  }

  .filter {
    position: absolute;
    top: 52px !important;
  }

  #div-filter {
    top:50px;
    left:170px;
  }
  #div-list-data {
    top:50px;
    right:60px;
  }
</style>

<style lang="sass">
  @import ~bulma/sass/utilities/_all

  html, body, #app
    overflow:none
    width: 99.4%
    height: 98.8%
    margin: 0
    padding: 0
    margin-left: 12px

  .vld-dashboard-app
    position: relative

    .map
      height: auto
      width: 100%

    .map-panel
      padding: 0

      .panel-heading
        box-shadow: 0 .25em .5em transparentize($dark, 0.8)

      .panel-content
        background: $white
        box-shadow: 0 .25em .5em transparentize($dark, 0.8)

      .panel-block
        &.draw-panel
          .buttons
            .button
              display: block
              flex: 1 1 100%

      +tablet()
        position: absolute
        top: 0
        right: 0
        max-height: 500px
        width: 22em

    .base-layers-panel
      position: absolute
      left: 50%
      bottom: 20px
      transform: translateX(-50%)

    .feature-popup
      position: absolute
      left: -50px
      bottom: 12px
      width: 20em
      max-width: none

      &:after, &:before
        top: 100%
        border: solid transparent
        content: ' '
        height: 0
        width: 0
        position: absolute
        pointer-events: none
      &:after
        border-top-color: white
        border-width: 10px
        left: 48px
        margin-left: -10px
      &:before
        border-top-color: #cccccc
        border-width: 11px
        left: 48px
        margin-left: -11px

      .card-content
        max-height: 20em
        overflow: auto

      .content
        word-break: break-all
</style>

