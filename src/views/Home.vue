<template>
  <b-container class="home mt-5">
    <h2 class="text-center">{{$t('home-title')}}</h2>
    <b-row>
      <b-col cols="12" class="text-center">
          <p>{{$t('welcome-msg')}}</p>
      </b-col>
      <b-col cols="12" sm="6" class="text-center text-sm-end my-1">
        <b-button
          variant="primary"
          size="lg"
          @click="$router.push({name: 'NewBill'})"
        >
          {{$t('new-bill')}}
        </b-button>
      </b-col>
      <b-col cols="12" sm="6" class="text-center text-sm-start my-1">
        <b-button
          variant="primary"
          size="lg"
        >
          {{$t('load-bill')}}
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  name: 'Home',
}
</script>
