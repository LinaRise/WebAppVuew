<!--страничка Join-->
<template>
    <div class="join">
        <div class="container">
            <section class="section">
                <h1 class="title">Заполните форму</h1>
                <form id="sendForm" method="POST" @submit.prevent="submit">
                    <div class="field">
                        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                            <label class="label">ФИО</label>
                            <div class="control has-icons-left">
                                <input class="input is-primary " v-model.trim="name" type="text"
                                       placeholder="Введите ФИО"
                                       @input="setName($event.target.value)"/>
                                <span class="icon is-small is-left">
                                    <font-awesome-icon icon="user" size="1x" :style="{ color: '#1EC9AC' }"/>
                               </span>
                            </div>
                        </div>
                        <div class="error" v-if="!$v.name.required"><p class="help is-danger">Поле не может быть
                            пустым!</p>
                        </div>
                        <div class="error" v-if="!$v.name.minLength"><p class="help is-danger">Поле должно содержать
                            минимум
                            {{$v.name.$params.minLength.min}}
                            букв!</p>
                        </div>
                        <div class="error" v-if="!$v.name.regex"><p class="help is-danger">Поле должно содержать только
                            буквы!</p>
                        </div>
                    </div>


                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-primary" v-model.trim="emailField" type="text"
                                   placeholder="Введите email"
                                   @input="setEmailField($event.target.value)">
                            <span class="icon is-small is-left">
                           <font-awesome-icon icon="envelope" size="1x" :style="{ color: '#1EC9AC' }"/>
                         </span>
                        </div>

                        <div class="error" v-if="!$v.emailField.required"><p class="help is-danger">Поле не может быть
                            пустым!</p></div>
                        <div class="error" v-if="!$v.emailField.minLength">
                            Поле должно содержать минимум
                            {{$v.emailField.$params.minLength.min}}
                            символов.
                        </div>
                        <div class="error" v-if="!$v.emailField.regex"><p class="help is-danger">Некорректный email!</p>
                        </div>
                    </div>

                        <div class="field">
                            <label class="label">Тема</label>
                            <div class="control">
                                <div class="select is-primary">
                                    <select>
                                        <option>Отзыв о приложении</option>
                                        <option>Предложения о сотрудничестве</option>
                                        <option>Предложения по расширению функционала приложения</option>
                                        <option>Ошибки в работе приложения</option>
                                        <option>Другое</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Сообщение</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Введите свое сообщение"></textarea>
                            </div>
                        </div>


                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-primary " type="submit" :disabled="submitStatus === 'PENDING'">
                                    Отправить
                                </button>

                            </div>
                            <div class="control">
                                <input class="button is-primary is-light" type="reset" value="Очистить">
                            </div>
                        </div>

                        <div>
                            <p class="typo__p" v-if="submitStatus === 'OK'">Собщение отправлено!</p>
                            <p class="typo__p" v-if="submitStatus === 'ERROR'">Пожалуйста, заполните форму
                                корректно.</p>
                            <p class="typo__p" v-if="submitStatus === 'PENDING'">Отправка...</p>
                        </div>

                </form>
            </section>
        </div>
    </div>
</template>


<script>
    import {required, minLength, helpers} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                name: '',
                emailField: '',
                submitStatus: null
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(10),
                regex: helpers.regex(name, /^[a-zA-Z а-яА-ЯёЁ]*$/)
            },

            emailField: {
                required,
                minLength: minLength(5),
                regex: helpers.regex(name, /^(([^<>()\\\\[\]\\.,;:\s@"]+(\.[^<>()\\\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            },

        },

        methods: {
            setName(value) {
                this.name = value
                this.$v.name.$touch()
                this.submitStatus = null
            },
            setEmailField(value) {
                this.emailField = value
                this.$v.emailField.$touch()
                this.submitStatus = null

            },
            submit() {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    // do your submit logic here
                    this.submitStatus = 'PENDING'
                    setTimeout(() => {
                        this.submitStatus = 'OK'
                    }, 500)
                }
            }
        }
    }

</script>

<style lang="sass" scoped>
    @import '../mq'

    .container
        max-width: 500px

    .button
        margin-right: 20px
        max-width: 100px


</style>
