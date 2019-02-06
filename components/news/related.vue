<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <h2>Related news</h2>
            <hr>
            <news-item :items="(items.length > 3)? items.splice(0, 3) : items"/>
        </div>
    </div>
</template>

<script>
import newsItem from '~/components/news/item'

export default {
    name: 'news-related',
    data () {
        return {}
    },
    props: {
        items: {
            type: Array,
            default: function () { return [] }
        }
    },
    components: {
        newsItem
    }

}
</script>