<template>
    <main role="main">  
        <news-about/>
        <div class="album py-5 bg-light">
            <news-list :items="news"/>
        </div>
    </main>
</template>




<script>
import newsList from '~/components/news/list'
import newsAbout from '~/components/news/about-block'

import axios from 'axios'
import methods_news from '~/api_methods/news'

export default {
    name: 'app-section',
    data () {
        return {
        }
    },
    mounted() {
        console.log('MOUNTED')
        this.getAll()
    },
    computed: {
        news () { 
            return this.$store.getters.news
        }
    },
    methods: {
        getAll: async function() {
            let getAll = await methods_news.getAll()
            console.log('getAll:', getAll)
            this.$store.dispatch('setNews', getAll)
        }
    },
    components: {
        newsList,
        newsAbout
    }
}
</script>
