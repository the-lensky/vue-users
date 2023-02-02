<template>
  <div v-if="isShowUsers" class="users">
    <actions
        :usersToShow="usersToShow"
        @handleSort="handleSort"
        @handleAddUser="handleAddUser"
    />
    <user-column
        :isCheckAll="isCheckAll"
        @handleAllCheckbox="handleAllCheckbox"
    />
    <user
        v-for="user in usersToShow"
        :key="user.id"
        :user="user"
        :isCheckAll="isCheckAll "
        :checkedUsers="checkedUsers"
        @handleUserCheckbox="handleUserCheckbox"
    />
    <toolbox
        :checkedUsers="checkedUsers"
        :usersToShow="usersToShow"
        @handleClearCheckedUsers="unSelectAllUsers"
        @handleSearch="handleSearch"
    />
    <add-user
        v-if="isShowAddUser"
        @handleCLoseAddUser="handleCLoseAddUser"
    />
  </div>
  <div v-else>No users</div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserColumn from './components/UserColumn.vue'
import User from './components/User.vue'
import Toolbox from './components/Toolbox.vue'
import AddUser from './components/AddUser.vue'
import Actions from './components/Actions.vue'

export default {
  components: { Actions, UserColumn, User, Toolbox, AddUser },
  data() {
    return {
      checkedUsers: [],
      usersToShow: [],
      isShowAddUser: false,
      isCheckAll: false,
    }
  },
  computed: {
    isShowUsers() {
      return Boolean(this.users.length)
    },
    ...mapGetters([
      'users'
    ])
  },
  watch: {
    'users'(val) {
      this.usersToShow = val
    }
  },
  methods: {
    init() {
      const users = JSON.parse(localStorage.getItem('users')) || []
      this.usersToShow = users
      users.length
          ? this.$store.dispatch('setUsers', users)
          : this.$store.dispatch('getUsers')
    },
    handleUserCheckbox(status, id) {
      if(!status) {
        this.isSelectedAll = false
        this.checkedUsers = this.checkedUsers.filter(userId => userId !== id)
      } else {
        this.checkedUsers.push(id)
      }
    },
    handleAllCheckbox(status) {
      this.isCheckAll = !this.isCheckAll
      this.checkedUsers = []
      if(this.isCheckAll) {
        for (let i = 0; i < this.users.length; i++) {
          this.checkedUsers.push(this.users[i].id)
        }
      }
      // this.isSelectedAll = status
      // status
      //     ? this.selectAllUsers()
      //     : this.unSelectAllUsers()
    },
    updateCheckall() {
      if(this.checkedUsers.length == this.users.length) {
        this.isCheckAll = true
      } else {
        this.isCheckAll = false
      }
    },
    selectAllUsers() {
      this.checkedUsers = []
      this.users.forEach(user => this.checkedUsers.push(user.id))
    },
    unSelectAllUsers() {
      this.checkedUsers = []
    },
    handleAddUser() {
      this.isShowAddUser = true
    },
    handleCLoseAddUser() {
      this.isShowAddUser = false
    },
    handleSearch(value) {
      if(!value) this.usersToShow = this.users

      const filterValue = value.toLowerCase()
      this.usersToShow = this.users.filter(user => {
        return (
            user.name.toLowerCase().includes(filterValue) ||
            user.email?.toLowerCase().includes(filterValue) ||
            user.phone?.toLowerCase().includes(filterValue)
        )
      })
    },
    handleSort(sort, dir) {
      return this.usersToShow.sort((a, b) => {
        let modifier = 1
        if(dir === 'desc') modifier = -1
        if(a[sort] < b[sort]) return -1 * modifier
        if(a[sort] > b[sort]) return 1 * modifier
        return 0
      })
    }
  },
  mounted() {
    this.init()
  },
}
</script>
