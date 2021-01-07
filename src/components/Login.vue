<template>
    <div>
        <form class="flex flex-col item-center" @submit.prevent="login">
            <div class="flex flex-col user">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input type="email" 
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                 v-model="email"
                 id="email"
                 />
            </div>
            <div class="flex flex-col mt-10">
                <label for="password" 
                 class="block text-gray-700 text-sm font-bold mb-2"
                >
                    Password
                </label>
                <input type="password" 
                 class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700"
                 v-model="password"
                 />
            </div>
            <button class="btn-blue">Sign In</button>
        </form>
        <div class="text-red-600"> {{ error.message }} </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data: () => ({
        email: '',
        password: '',
        error: ''
    }),
    methods: {
        ...mapActions({
            loginVue: 'auth/login'
        }),
        async login() {
            try {
                await this.loginVue({
                    email: this.email,
                    password: this.password
                });
            } catch (error) {
                this.error = error;
            }
        }
    }
}
</script>