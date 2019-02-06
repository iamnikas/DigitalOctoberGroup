<template>
    <div>
        <app-header/>
        <main role="main"> 
            <section class="jumbotron">
                <div class="container">
                    <h1 class="jumbotron-heading">{{ item.title }}</h1>
                    <div v-html="item.content"></div>
                </div>
            </section>
            <news-related :items="news"/>
        </main>
        <app-footer/>
    </div>
</template>

<script>
import newsRelated from '~/components/news/related'
import appHeader from '~/components/header'
import appFooter from '~/components/footer'
import methods_news from '~/api_methods/news'

export default {
    validate ({ params }) {
    // Должен быть числом
    let news_id = /^\d+$/.test(params.id)
    console.log('params validate:', news_id)
    return news_id
    },
    data () {
        return {
            item: {
                title: '',
                description: '',
                content: '',
            }
        }
    },
    mounted() {
        this.getAll();
        this.getOne();
    },
    computed: {
        news () { 
            return this.$store.getters.news
        }
    },
    methods: {
        getOne: async function() {
            let getOneItem = await methods_news.getOne(parseInt(this.$route.params.id))
            console.log('getOneItem:', getOneItem)
            this.item.title = getOneItem.title
            this.item.description = getOneItem.description
            this.item.content = getOneItem.content
        },
        getAll: async function() {
            let getAllItems = await methods_news.getAll()
            console.log('getAll:', getAllItems)
            
            this.$store.dispatch('setNews', getAllItems)
        }
    },
    components: {
        appHeader,
        appFooter,
        newsRelated
    }
}
</script>
