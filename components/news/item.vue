<template>
    <div class="row">
        <div class="col-md-4" v-for="(item, index) in items" v-if="index <= 3">
            <nuxt-link :to="'/news/'+item.id" class="card mb-4 shadow-sm">
                <img class="card-img-top" :src="item.image" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">{{item.description}}</p>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="stylus">
  $jumbotron-padding-y = 3rem
  .jumbotron 
    padding-top: $jumbotron-padding-y;
    padding-bottom: $jumbotron-padding-y;
    margin-bottom: 0;
    background-color: #fff;
  
    @media (min-width: 768px)   
      padding-top: calc($jumbotron-padding-y * 2);
      padding-bottom: calc($jumbotron-padding-y * 2);

    p
      &:last-child
        margin-bottom: 0;
  
  .jumbotron-heading
    font-weight: 300;

  .jumbotron
    .container
      max-width: 40rem;
</style>

<script>
export default {
    name: 'news-item',
    data () {
        return {}
    },
    props: {
        items: {
            type: Array,
            default: []
        }
    }
}
</script>
