<template>
  <transition name="model">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button class="modal-close" @click="handleCLose">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <Form class="add-form" @submit="onSubmit">
                <Field
                    name="name"
                    type="text"
                    placeholder="name"
                    :rules="validateName"
                />
                <ErrorMessage name="name" />
                <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    :rules="validateEmail"
                />
                <ErrorMessage name="email" />
                <input
                    v-model="phone"
                    v-maska
                    placeholder="+375 (XX) XXX-XX-XX"
                    data-maska="+375 (##) ###-##-##"
                />
                <button>Add User</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { vMaska } from 'maska'
import { v4 as uuidv4 } from 'uuid'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

export default {
  directives: { maska: vMaska },
  components: { Form, Field, ErrorMessage },
  props: {},
  data() {
    return {
      phone: '',
      validateName: { required: true, min: 2 },
    }
  },
  methods: {
    handleCLose() {
      this.$emit('handleCLoseAddUser')
    },
    onSubmit(user) {
      user.phone = this.phone
      user.id = uuidv4()
      this.$store.dispatch('addUser', user)
      this.handleCLose()
    },
    validateEmail(value) {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

      if(value && !regex.test(value)) {
        return 'This field must be a valid email'
      }
      return true
    },
  },
}
</script>
