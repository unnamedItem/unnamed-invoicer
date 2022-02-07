<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary" class="px-3 px-lg-5">
            <b-navbar-brand :to="{name: 'Home'}">{{$t('biller')}}</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{name: 'Home'}">{{$t('home')}}</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            {{$t('language')}}
                        </template>
                            <b-dropdown-item @click="switchLang('es')">
                                <img src="@/assets/flags/es.png" width="30px">
                                <span class="mx-1">{{$t('es')}}</span>
                            </b-dropdown-item>
                            <b-dropdown-item @click="switchLang('en')">
                                <img src="@/assets/flags/gb.png" width="30px">
                                <span class="mx-1">{{$t('en')}}</span>
                            </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'TheNavbar',

    methods: {
        switchLang: function(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>
