<template xmlns:>
  <div id="app" :class="[$options.name]">
    <b-navbar toggleable="lg" type="dark" variant="dark">

      <a class="navbar-brand" href="#">
        <img src="./assets/logo.png" alt="" width="40px" height="80px">
        <b-navbar-brand href="#"> Dashboard</b-navbar-brand>
      </a>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item-dropdown text="Filter" right>
            <b-dropdown-item href="#" v-b-toggle.collapse-1>Date</b-dropdown-item>
            <b-dropdown-item href="#" v-b-toggle.collapse-2>Category Event</b-dropdown-item>
            <b-dropdown-item href="#" v-b-toggle.collapse-3>Rating</b-dropdown-item>
            <b-dropdown-item href="#" v-b-toggle.collapse-4>Province</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item href="#">Configuration</b-dropdown-item>
            <b-dropdown-item href="#">Member</b-dropdown-item>
            <b-dropdown-item href="#">Organization Structure</b-dropdown-item>
            <b-dropdown-item href="#">Troops</b-dropdown-item>
            <b-dropdown-item href="#">Comment</b-dropdown-item>
            <b-dropdown-item href="#">User</b-dropdown-item>
          </b-nav-item-dropdown>


          <b-button size="sm" class="my-2 my-sm-0" disabled>Administrator</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nav >
      <div class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
        <a class="nav-item btn btn-info rounded-0  active" id="nav-1-tab" data-toggle="tab" href="#nav-1" role="tab" aria-controls="nav-1" aria-selected="true">Kejadian</a>
        <a class="nav-item btn btn-info rounded-0 " id="nav-2-tab" data-toggle="tab" href="#nav-2" role="tab" aria-controls="nav-2" aria-selected="false">Kegiatan</a>
        <a class="nav-item btn btn-info rounded-0 " id="nav-3-tab" data-toggle="tab" href="#nav-3" role="tab" aria-controls="nav-3" aria-selected="false">Sebaran Kekuatan</a>
        <a class="nav-item btn btn-info rounded-0 " id="nav-4-tab" data-toggle="tab" href="#nav-4" role="tab" aria-controls="nav-4" aria-selected="false">Rawan Bencana</a>
        <a class="nav-item btn btn-info rounded-0 " id="nav-5-tab" data-toggle="tab" href="#nav-5" role="tab" aria-controls="nav-5" aria-selected="false">Perbatasan</a>
      </div>
    </nav>
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
          label-cols-sm="10"
          label-cols-lg="11"
          label="Rating"
          label-for="radio-rating">
          <b-form-radio-group
            id="radio-rating"
            name="rating-options"
          >
              <b-form-radio size="sm" value="all">All</b-form-radio>
              <b-form-radio size="sm" value="u10">u10</b-form-radio>
              <b-form-radio size="sm" value="10-20">10-20</b-form-radio>
              <b-form-radio size="sm" value="20-40">20-40</b-form-radio>
              <b-form-radio size="sm" value="40-60">40-60</b-form-radio>
              <b-form-radio size="sm" value="60-80">60-80</b-form-radio>
              <b-form-radio size="sm" value="80-100">80-100</b-form-radio>
          </b-form-radio-group>

        </b-form-group>

        <b-form-group
          label-cols-sm="6"
          label-cols-lg="5"
          label="Province"
          label-for="select-province">
          <b-form-select
            id="select-province"
            name="province-options"
          >
            <b-form-select-option  size="lg" value="Aceh">Aceh</b-form-select-option>
            <b-form-select-option  size="lg" value="Sumatra Utara">Sumatra Utara</b-form-select-option>
            <b-form-select-option  size="lg" value="Sumatra Barat">Sumatra Barat</b-form-select-option>
            <b-form-select-option  size="lg" value="Jakarta">Jakarta</b-form-select-option>
            <b-form-select-option  size="lg" value="Jawa Barat">Jawa Barat</b-form-select-option>
            <b-form-select-option  size="lg" value="Jawa Tengah">Jawa Tengah</b-form-select-option>
            <b-form-select-option  size="lg" value="Jawa Timur">Bandung</b-form-select-option>
            <b-form-select-option  size="lg" value="Bali">Bali</b-form-select-option>
          </b-form-select>
        </b-form-group>

        <b-button style="margin-top:35px;" type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>

    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
        <vl-map v-if="mapVisible" class="map" ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                @postcompose="onMapPostCompose"
                data-projection="EPSG:4326" @mounted="onMapMounted">
          <!-- map view aka ol.View -->
          <vl-view ref="view" :center.sync="center" :zoom.sync="zoom" :rotation.sync="rotation"></vl-view>



          <!-- interactions -->
          <vl-interaction-select :features.sync="selectedFeatures" v-if="drawType == null">
            <template slot-scope="select">
              <!-- selected feature popup -->
              <vl-overlay class="feature-popup" v-for="feature in select.features" :key="feature.id" :id="feature.id"
                          :position="pointOnSurface(feature.geometry)" :auto-pan="true" :auto-pan-animation="{ duration: 300 }">
                <template>
                  <b-card title="Chart" :sub-title="feature.properties.Propinsi">
                    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
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
            <vl-source-vector url="https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/97838545e3c047103ee74410f5ce048261c82f4d/indonesia-prov.geojson"></vl-source-vector>
            <vl-style-func :factory="styleFuncProp" />
          </vl-layer-vector>

        </vl-map>
      </div>
      <div class="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
        <vl-map v-if="mapVisible" class="map" ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                @postcompose="onMapPostCompose"
                data-projection="EPSG:4326" @mounted="onMapMounted">
          <!-- map view aka ol.View -->
          <vl-view ref="view" :center.sync="center" :zoom.sync="zoom" :rotation.sync="rotation"></vl-view>



          <!-- interactions -->
          <vl-interaction-select :features.sync="selectedFeatures" v-if="drawType == null">
            <template slot-scope="select">
              <!-- selected feature popup -->
              <vl-overlay class="feature-popup" v-for="feature in select.features" :key="feature.id" :id="feature.id"
                          :position="pointOnSurface(feature.geometry)" :auto-pan="true" :auto-pan-animation="{ duration: 300 }">
                <template>
                  <b-card title="Chart" :sub-title="feature.properties.Propinsi">
                    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
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
            <vl-source-vector url="https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/97838545e3c047103ee74410f5ce048261c82f4d/indonesia-prov.geojson"></vl-source-vector>
            <vl-style-func :factory="styleFuncProp" />
          </vl-layer-vector>

        </vl-map>
      </div>
      <div class="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
        <vl-map v-if="mapVisible" class="map" ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                @postcompose="onMapPostCompose"
                data-projection="EPSG:4326" @mounted="onMapMounted">
          <!-- map view aka ol.View -->
          <vl-view ref="view" :center.sync="center" :zoom.sync="zoom" :rotation.sync="rotation"></vl-view>



          <!-- interactions -->
          <vl-interaction-select :features.sync="selectedFeatures" v-if="drawType == null">
            <template slot-scope="select">
              <!-- selected feature popup -->
              <vl-overlay class="feature-popup" v-for="feature in select.features" :key="feature.id" :id="feature.id"
                          :position="pointOnSurface(feature.geometry)" :auto-pan="true" :auto-pan-animation="{ duration: 300 }">
                <template>
                  <b-card title="Chart" :sub-title="feature.properties.Propinsi">
                    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
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
            <vl-source-vector url="https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/97838545e3c047103ee74410f5ce048261c82f4d/indonesia-prov.geojson"></vl-source-vector>
            <vl-style-func :factory="styleFuncProp" />
          </vl-layer-vector>

        </vl-map>
      </div>
      <div class="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab">
        <vl-map v-if="mapVisible" class="map" ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                @postcompose="onMapPostCompose"
                data-projection="EPSG:4326" @mounted="onMapMounted">
          <!-- map view aka ol.View -->
          <vl-view ref="view" :center.sync="center" :zoom.sync="zoom" :rotation.sync="rotation"></vl-view>



          <!-- interactions -->
          <vl-interaction-select :features.sync="selectedFeatures" v-if="drawType == null">
            <template slot-scope="select">
              <!-- selected feature popup -->
              <vl-overlay class="feature-popup" v-for="feature in select.features" :key="feature.id" :id="feature.id"
                          :position="pointOnSurface(feature.geometry)" :auto-pan="true" :auto-pan-animation="{ duration: 300 }">
                <template>
                  <b-card title="Chart" :sub-title="feature.properties.Propinsi">
                    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
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
            <vl-source-vector url="https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/97838545e3c047103ee74410f5ce048261c82f4d/indonesia-prov.geojson"></vl-source-vector>
            <vl-style-func :factory="styleFuncProp" />
          </vl-layer-vector>

        </vl-map>
      </div>
      <div class="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-5-tab">
        <vl-map v-if="mapVisible" class="map" ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                @postcompose="onMapPostCompose"
                data-projection="EPSG:4326" @mounted="onMapMounted">
          <!-- map view aka ol.View -->
          <vl-view ref="view" :center.sync="center" :zoom.sync="zoom" :rotation.sync="rotation"></vl-view>



          <!-- interactions -->
          <vl-interaction-select :features.sync="selectedFeatures" v-if="drawType == null">
            <template slot-scope="select">
              <!-- selected feature popup -->
              <vl-overlay class="feature-popup" v-for="feature in select.features" :key="feature.id" :id="feature.id"
                          :position="pointOnSurface(feature.geometry)" :auto-pan="true" :auto-pan-animation="{ duration: 300 }">
                <template>
                  <b-card title="Chart" :sub-title="feature.properties.Propinsi">
                    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
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
            <vl-source-vector url="https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/97838545e3c047103ee74410f5ce048261c82f4d/indonesia-prov.geojson"></vl-source-vector>
            <vl-style-func :factory="styleFuncProp" />
          </vl-layer-vector>

        </vl-map>
      </div>
    </div>

    <div class="fixed-top-left d-flex bd-highlight my-10">
      <b-button v-b-toggle.collapse-6 squared class="ml-auto btn-arrow-left btn-primary">List Data</b-button>
    </div>

    <div class="fixed-top ml-auto d-flex bd-highlight my-11 p-1 w-25">
      <b-collapse id="collapse-6">
        <b-card right-align class="overflow-auto ml-auto" style="max-height:420px">
          <ul class="list-unstyled">
            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-1">List-based media object</h5>
              <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <template v-slot:aside>
              <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
              </template>

              <h5 class="mt-0 mb-1">List-based media object</h5>
              <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </b-media>

            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
              </template>

              <h5 class="mt-0 mb-1">List-based media object</h5>
              <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </b-media>

          </ul>
        </b-card>
      </b-collapse>
    </div>
    <!--// app map -->


  </div>
</template>

<script>
  import { kebabCase, camelCase } from 'lodash'
  import { createProj, addProj, findPointOnSurface, createStyle } from 'vuelayers/lib/ol-ext'
  import ScaleLine from 'ol/control/ScaleLine'
  import OverviewMap from 'ol/control/OverviewMap'
  import ZoomSlider from 'ol/control/ZoomSlider'
  // const axios = require('axios')

  let imageExtent = [10018754.172321, -1247452.3022878, 16280475.529441, 1257236.2405602]
  let customProj = createProj({
    code: 'xkcd-image',
    units: 'pixels',
    extent: imageExtent,
  })
  // add to the list of known projections
  // after that it can be used by code
  addProj(customProj)
  // const easeInOut = t => 1 - Math.pow(1 - t, 3)
  const methods = {
    camelCase,
    pointOnSurface: findPointOnSurface,
    geometryTypeToCmpName (type) {
      return 'vl-geom-' + kebabCase(type)
    },
    onMapPostCompose ({ vectorContext, frameState }) {
      if (!this.$refs.marker || !this.$refs.marker.$feature) return

      const feature = this.$refs.marker.$feature
      if (!feature.getGeometry() || !feature.getStyle()) return
      this.$refs.map.render()
    },
    onMapMounted () {
      // now ol.Map instance is ready and we can work with it directly
      this.$refs.map.$map.getControls().extend([
        new ScaleLine(),
        new OverviewMap({
          collapsed: false,
          collapsible: true,
        }),
        new ZoomSlider(),
      ])
    },
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
        var result
        var count = 0
        for (var prop in this.names) {
          if (Math.random() < 1 / ++count) {
            result = prop
          }
        }
        return { name: result, rgb: this.names[result] }
      }

      return (feature, resolution) => {
        let isStyle = feature.getStyle()
        let isStyleFunction = feature.getStyleFunction()
        if (!isStyle && !isStyleFunction) {
          let styles = [
            createStyle({
              // strokeColor: '#de9147',
              strokeWidth: 0.8,
              fillColor: Colors.random().rgb,
              text: feature.getProperties().Propinsi,
              font: '10px sans-serif',
              scale: 2,
            }),
          ]
          feature.setStyle(styles)
          return styles
        }
      }
    },
    tabsClick () {

    },
  }

  export default {
    name: 'vl-dashboard-app',
    methods,
    data () {
      return {
        center: [115.90631268750555, -1.8963730925758129],
        zoom: 5,
        rotation: 0,
        selectedFeatures: [],
        panelOpen: true,
        mapVisible: true,
        drawType: undefined,
        options: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        }],
        // features: null,
      }
    },
  }
</script>

<style scoped>

  .card-body {
    padding: 0.4rem;
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
</style>

<style lang="sass">
  @import ~bulma/sass/utilities/_all

  html, body, #app
    width: 100%
    height: 95.7%
    margin: 0
    padding: 0

  .vld-demo-app
    position: relative

    .map
      height: 100%
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
