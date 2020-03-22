<template>
    <div>
        <v-flex align-center>
            <v-img
                class='logo'
                contain
                src="../assets/logo.png"
                width=600
                aspect-ratio="1.5"
            ></v-img>
        </v-flex>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {
        // let niv = new UserProfile('Niv');
        // let mor = new UserProfile('Mor');
        // niv.door.setCryptoKey(mor.door.getPublicKey());
        // let message = 'Hello World!';
        // console.log(message);
        // let encrypted = Composer.compose(message, niv);
        // console.log(encrypted);
        // let decrypted = Composer.decompose(encrypted, mor);
        // console.log(decrypted);
    },
}
</script>

<style scoped>
.logo {
    flex: 1 1 100%;
    margin: auto;
    padding: 24px;
    width: 100%;
}
</style>