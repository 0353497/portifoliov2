<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#certificaten">certificaten</a>
                    </li>
                    <li class="nav-item">
                        <a href="/skills" class="nav-link">vaardigheden</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            meer
                        </a>
                        <Dropdown :listItems="listItems" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import ListItem from './../models/Listitem';
import Dropdown from './Dropdown.vue';
export default {
    name: 'Nav',
    components: {
        Dropdown
    },
    data() {
        return {
            listItems: [
                new ListItem('Home', '/'),
                new ListItem('About', '/about'),
                new ListItem('Login', '/login')
            ]
        }
    }
}
</script>