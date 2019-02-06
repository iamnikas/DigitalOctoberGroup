<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="item in items">
                <nuxt-link :to="'/news/'+item.id" class="card mb-4 shadow-sm">
                    <img class="card-img-top" :src="item.image" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">{{item.description}}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'news-list',
        data () {
            return {}
        },
        props: {
            items: {
                type: Array,
                default: function () { return [] }
            }
        }
    }
</script>
