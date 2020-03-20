<template>
    <div>
        <v-img
            class='logo'
            contain
            src="../assets/logo.png"
            aspect-ratio="1.5"
        ></v-img>
        <v-text-field
            label="nickname"
            v-model='nickname'
            outlined
            clearable
            rounded
        />
         <v-text-field
            label ="chat name"
            v-model='room'
            outlined
            clearable
            rounded
        />
        <v-btn
            class='white--text'
            :color='buttonColor'
            fab
            elevation=2
        >
            Go
        </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nickname: '',
            room: ''
        }
    },
    computed: {
        buttonColor() {
            if (this.isNicknameValid() && this.isRoomValid())
                return '#76D161'
            else
                return '#666666'
        }
    },
    methods: {
        isNicknameValid: function() {
            return this.nickname;
        },
        isRoomValid: function() {
            return this.room;
        },
    }
}
</script>

<style scoped>
.logo {
    margin: 3% 10% 3% 10%
}

.v-text-field {
    width: 50%;
    left: 24%;
}

.v-btn {
    margin-top: 10%;
    left: 44.5%;
}
</style>