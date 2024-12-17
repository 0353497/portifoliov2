<template>
    <ul class="dropdown-menu">
        <li v-for="(item, index) in listItems" :key="index">
            <router-link class="dropdown-item" :to="item.href">{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<script>
import ListItem from './../models/Listitem';

export default {
    name: 'Dropdown',
    props: {
        listItems: {
            type: Array,
            required: true,
            validator(value) {
                return value.every(item => item instanceof ListItem);
            }
        }
    }
}
</script>
