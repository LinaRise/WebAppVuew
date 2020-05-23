<template>

    <div id="app">
        <!--        навишационная панель - header-->
        <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-start">
                    <a class="navbar-item">Лекции КТП</a>
                </div>

                <span class="navbar-burger" v-on:click="toggleNav" v-bind:class="{'is-active' :isActive}">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div class="navbar-end navbar-menu" v-bind:class="{'is-active' : isActive}">
                    <router-link to="/" class="navbar-item r-item">Home</router-link>
                    <router-link :to="{ path: '/', hash: '#features' }" class="navbar-item r-item">Features
                    </router-link>
                    <router-link to="faq" class="navbar-item r-item">FAQ</router-link>

                    <div class="navbar-item">
                        <p class="control">
                            <!--                            is-primary показывает, что кнопка основного цвета,-->
                            <!--                            is-outlined что есть края выкрашшеные в главый цвет-->
                            <a class="button is-primary is-outlined" href="join">
                               <span class="icon has-text-info">
                                    <font-awesome-icon icon="link"/>
                                 </span>
                                <span>Join Now</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
        <router-view></router-view>

        <!--footer-->
        <footer class="footer is-primary">
            <div class="container">
                <div class="columns">
                    <div class="column has-text-right">
                        <p>Полезные ссылки</p><br>
                        Почта для связи с разработчиком: lilu3050@gmail.com
                    </div>
                    <div class="column has-text-left">
                        <a class="icon " href="#">
                            <font-awesome-icon pull="left" :icon="['fab','google-play']" size="3x"/>
                        </a>
                        <span></span>
                        <a class="icon " href="instagram.com/alina__galeeva">
                            <font-awesome-icon pull="right" :icon="['fab','instagram']" size="3x"/>
                        </a>


                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                isActive: false
            }

        },
        methods: {
            toggleNav: function () {
                this.isActive = !this.isActive;

            }
        }
    }

</script>


<!--импортируем bulma-->

<style lang="sass">
    @import '../node_modules/bulma/bulma.sass'
    @import 'mq'

    //меняем цвет navbar на темный
    .navbar
        background-color: #383838
    /*height: 2rem !important*/

    a
        margin-right: 20px
        margin-left: 10px
    //при на ведении на кнопки navbara
    a:hover
        color: gray

    //лого сайта
    .navbar-start a
        color: #fff
        font-weight: bold

    //кнопки на navbar делаем другого цвета
    a.r-item
        color: #C1C1C1
        //расстояние между сверху/снизу и сбоку от кнопок
        padding: 0.5rem 3rem
        +mobile
            color: gray
            &:hover
                background-color: #F1F1F1
    //далем кнопку-решеточку белой
    .navbar-burger span
        background-color: #C1C1C1


    .footer
        background-color: $primary !important
            color: #fff

    .icon
        color: #fff

</style>
