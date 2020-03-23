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

    <vl-map v-for="tabs in activeTabs" :key="tabs.data.id" :id="tabs.data.id" class="map" ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
            data-projection="EPSG:4326">
      <!-- map view aka ol.View -->

      <vl-view ref="view" :center.sync="center" :zoom.sync="zoom" :rotation.sync="rotation"></vl-view>
      <!-- interactions -->
      <vl-interaction-select :features.sync="selectedFeatures" v-if="drawType == null">
        <template slot-scope="select">
          <!-- selected feature popup -->
          <vl-overlay class="feature-popup" v-for="feature in select.features" :key="feature.id" :id="feature.id"
                      :position="pointOnSurface(feature.geometry)" :auto-pan="true" :auto-pan-animation="{ duration: 300 }">
            <template>
              <b-card title="Data" :sub-title="feature.properties.name">
                <b-table :items="items" :fields="fieldsItem">
                </b-table>
              </b-card>
            </template>
          </vl-overlay>
          <!--// selected popup -->
        </template>
      </vl-interaction-select>
      <!--// interactions -->

      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-vector>
        <!-- <vl-source-vector :features="features"></vl-source-vector> -->
        <vl-source-vector url="https://bitbucket.org/rifani/geojson-political-indonesia/raw/0e89dcb0b0454c5afffd414fd0cd0c25f1688d10/IDN_adm_1_province.json"></vl-source-vector>
        <vl-style-func :factory="styleFuncProp" />
      </vl-layer-vector>

    </vl-map>
  </div>
</template>

<script>
import { camelCase } from 'lodash'
import { createProj, addProj, findPointOnSurface, createStyle } from 'vuelayers/lib/ol-ext'
import orgStructureService from '../services/orgstructure.service'
import configService from '../services/config.service'
import mapService from '../services/map.service'

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

      return (feature, resolution) => {
        const isStyle = feature.getStyle()
        const isStyleFunction = feature.getStyleFunction()
        if (!isStyle && !isStyleFunction) {
          let styles = [
            createStyle({
              // strokeColor: '#de9147',
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
    },
    selectedProvince () {
      if (this.filters.org_structure === 0) {
        this.IscurrentProvince = false
      } else {
        const conditionGetParentOrgStructure = '?parent_id=' + this.getCurrentMapId
        orgStructureService.getByCondition(conditionGetParentOrgStructure).then(res => {
          if (res.data.length < 1) {
            this.IscurrentProvince = false
          } else {
            this.IscurrentProvince = true
            const datas = []
            res.data.forEach(element => {
              datas.push({ id: element.id, org_structure_name: element.org_structure_name })
            })
            this.selectItems.itemsOrgStructureDetail = datas
          }
        })
      }
    },
    isActive (tabs) {
      return this.activeItem === tabs.data.id
    },
    setActive (tabs) {
      this.activeItem = tabs.data.id
      tabs.data.isActive = true
      this.tabsItem.forEach(el => {
        if (el.data.id !== tabs.data.id) {
          el.data.isActive = false
        }
      })
      // let conditionGetMapSpatial = null
      // if (this.getCurrentOrgStructureId === 0) {
      //   conditionGetMapSpatial = '?parent_id=0&res_1=' + tabs.data.res_1 + '&res_2=' + tabs.data.res_2
      // } else {
      //   conditionGetMapSpatial = '?parent_id=' + this.getCurrentMapId + '&res_1=' + tabs.data.res_1 + '&res_2=' + tabs.data.res_2
      // }
      // mapService.getByCondition(conditionGetMapSpatial).then(res => {
      //   if (res.data.length < 1) {
      //     this.features = []
      //   } else {
      //     const datas = []
      //     res.data.forEach(element => {
      //       let feature = {
      //         type: 'Feature',
      //         properties: {
      //           id: element.map_id,
      //           name: element.org_structure_name,
      //           geometry: element.map_spatial,
      //         },
      //       }
      //       datas.push(feature)
      //     })
      //     this.features = datas
      //   }
      // })
      return this.tabsItem
    },

  },
  data () {
    return {
      mapVisible: '',
      activeItem: '',
      IscurrentProvince: false,
      center: [115.90631268750555, -1.8963730925758129],
      zoom: 5,
      rotation: 0,
      selectedFeatures: [],
      drawType: undefined,
      fieldsItem: ['Nama', 'Tipe', 'Rating'],
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
      // features: [],
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
        datas.push({ id: element.id, org_structure_name: element.org_structure_name })
      })
      this.selectItems.itemsOrgStructure = datas
    })

    const conditionGetMap = '?res_1=1'
    configService.getByCondition(conditionGetMap).then(res => {
      const datas = []
      let i = 0
      res.data.forEach(el => {
        if (i === 0) {
          this.activeItem = el.id
          el.isActive = true
        } else {
          el.isActive = false
        }
        datas.push({ data: el })
        i++
      })
      this.tabsItem = datas
    })
  },
}
</script>

<style scoped>
  a {
    color: #2D7D9A !important;
  }
  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
      color: #fff !important;
      background-color: #2D7D9A !important;
  }

  .card-body {
    padding: 0.4rem;
  }
  .pl-6 {
    padding-left: 5rem !important;
  }
  .pl-7 {
    padding-left: 7rem !important;
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
    width: 99.5%
    height: 98.8%
    margin: 0
    padding: 0
    margin-left: 11px

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

