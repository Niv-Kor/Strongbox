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
import { UserProfile } from '../profile/UserProfile';
import * as Composer from '../decryption/Composer';

const NICKNAME_REGEX = new RegExp('^([0-9A-Za-z_-]{4,25}$)');
const ROOM_REGEX = new RegExp('^([0-9A-Za-z_-]{4,30}$)');

export default {
    data() {
        return {
            nickname: '',
            room: ''
        }
    },
    created() {
        let niv = new UserProfile('Niv');
        let mor = new UserProfile('Mor');
        niv.door.setEncrypterKey(mor.door.getPublicKey());
        let message = 'Hello World!';
        let encrypted = Composer.compose(message, niv);
        console.log(encrypted);
        let decrypted = Composer.decompose(encrypted, mor);
        console.log(decrypted);
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
            return this.nickname && NICKNAME_REGEX.test(this.nickname);
        },
        isRoomValid: function() {
            return this.room && ROOM_REGEX.test(this.room);
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