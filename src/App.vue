<template>
  <div id="app"
  :class="[{'collapsed' : collapsed}]"
  >
    <!-- <b-navbar v-if="currentUser" toggleable="lg" type="dark" variant="dark">

      <a class="navbar-brand" href="#">
        <img src="./assets/logo.png" alt="" width="40px" height="80px">
        <b-navbar-brand href="#"> Dashboard</b-navbar-brand>
      </a>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-b-toggle.collapse-6 size="sm" class="my-2 my-sm-0">List Data</b-nav-item>

          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item to="/dashboard">
                Dashboard
            </b-dropdown-item>
            <b-dropdown-item to="/config">
                Configuration
            </b-dropdown-item>
            <b-dropdown-item to="/orgstructure">
                Organization Structure
            </b-dropdown-item>
            <b-dropdown-item to="/poi">
                Poi
            </b-dropdown-item>
            <b-dropdown-item to="/user">
                User
            </b-dropdown-item>
          </b-nav-item-dropdown>


          <b-nav-item size="sm" class="my-2 my-sm-0 ml-2"><b-icon-people-fill></b-icon-people-fill>{{ currentUser.accessToken.username }}
          </b-nav-item>
          <b-button size="sm" class="my-2 my-sm-0 ml-2">
            <a class="nav-link" href @click.prevent="logOut">
              <font-awesome-icon icon="sign-out-alt" />Logout
            </a>
          </b-button>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="fixed-top ml-auto d-flex bd-highlight p-1 w-25" style="top:210px">
      <b-collapse id="collapse-6">
        <b-card right-align class="overflow-auto ml-auto" style="max-height:820px">
          <b-card no-body class="overflow-hidden  mb-3" style="max-width: 540px;">
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
    </div> -->
    <div v-if="currentUser">
      <sidebar-menu :menu="menu" @item-click="onItemClick" :collapsed="true" type="light">
        <span slot="toggle-icon"><font-awesome-icon icon="arrows-alt-h" /></span>
      </sidebar-menu>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'Dashboard Polda',
          hiddenOnCollapse: true,
        },
        {
          href: '/dashboard',
          title: 'Dashboard',
          icon: 'fa fa-map',
        },
        {
          href: '/config',
          title: 'Configuration',
          icon: 'fa fa-gear',
        },
        {
          href: '/orgstructure',
          title: 'Organization Structure',
          icon: 'fa fa-users',
        },
        {
          href: '/poi',
          title: 'Poi',
          icon: 'fa fa-map-marker',
        },
        {
          href: '/user',
          title: 'User',
          icon: 'fa fa-user',
        },
        {
          title: 'Logout',
          icon: 'fa fa-sign-out',
        },

      ],
      collapsed: true,
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
    onItemClick (event, item) {
      if (item.title === 'Logout') {
        this.$store.dispatch('auth/logout')
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style>
  .v-sidebar-menu {
    background-color: #616161 !important;
  }
  .v-sidebar-menu .vsm--toggle-btn {
    order: -1;
  }
  .v-sidebar-menu .vsm--item {
    position: relative;
    display: block;
    width: 100%;
    white-space: nowrap;
    padding: 10px 0px 10px 0px;
  }
  .v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active, .v-sidebar-menu .vsm--link_level-1.vsm--link_active {
    -webkit-box-shadow: 5px 0px 0px 0px #2D7D9A inset !important;
    box-shadow: 5px 0px 0px 0px #2D7D9A inset !important;
  }

  .v-sidebar-menu .vsm--link_hover, .v-sidebar-menu .vsm--link:hover {
    color: #fff !important;
    background-color: #9E9E9E !important;
}

  .v-sidebar-menu.vsm_collapsed .vsm--link_level-1.vsm--link_hover .vsm--icon,
  .v-sidebar-menu.vsm_collapsed .vsm--link_level-1:hover .vsm--icon {
    background-color: #0099BC !important;
  }
  .v-sidebar-menu .vsm--link_level-1 .vsm--icon {
      background-color: #4C4A48 !important;
  }
  .v-sidebar-menu .vsm--mobile-bg {
    background-color: #2D7D9A !important;
  }
  .v-sidebar-menu .vsm--toggle-btn {
    color: #fff !important;
    background-color: #4C4A48 !important;
  }
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
