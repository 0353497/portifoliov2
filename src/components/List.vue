<template>
    <div class="col">
        <h2>{{ title }}</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in items" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'List',
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
}

</script>