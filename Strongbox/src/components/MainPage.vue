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
            <v-text-field
                label="Nickname"
                v-model='nickname'
                outlined
                clearable
                rounded
            />
            <v-text-field
                label="Room Title"
                width=100
                v-model='room'
                outlined
                clearable
                rounded
            />
            <v-layout justify-center>
                <v-btn
                    class='white--text'
                    :color='buttonColor'
                    elevation=2
                    x-large
                    fab
                >Go</v-btn>
            </v-layout>
        </v-flex>
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
            room: '',
        }
    },
    created() {
        let niv = new UserProfile('Niv');
        let mor = new UserProfile('Mor');
        niv.door.setCryptoKey(mor.door.getPublicKey());
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
    flex: 1 1 100%;
    margin: auto;
    padding: 24px;
    width: 100%;
}

.v-text-field {
    width: 50%;
    left: 24%;
}

.v-btn {
    margin-top: 5%;
}
</style>