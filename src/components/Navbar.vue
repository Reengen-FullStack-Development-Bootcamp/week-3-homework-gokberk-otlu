<template>
    <div>
        <Search />
        <AuthoritySwitch />
    </div>
</template>

<script>
import Search from './Search.vue'
import AuthoritySwitch from './AuthoritySwitch.vue'
export default {
    components: {
        Search,
        AuthoritySwitch
    }
}
</script>