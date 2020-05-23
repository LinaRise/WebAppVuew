<!--главная страничка-->
<template>
    <div class="home">
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{heading}}</h1>
                    <div class="is-two-thirds column is-paddingless">
                        <h2 class="subtitle is-4 ">{{subheading}}</h2>
                    </div>
                    <a class="button is-medium is-primary is-inverted is-outlined " id="learn">Узнать больше</a>
                </div>
            </div>
        </section>

        <section id ="features" class="section">
            <div class="container">
                <div class="columns pd is-desktop">
                    <div class="column is-1 has-text-centered">
                        <font-awesome-icon icon="info" size="2x" :style="{ color: '#1EC9AC' }"/>
                    </div>
                    <div class="column is-one-third-desktop">
                        <p class="title"><strong>Лучшее приложение для изучения учебных лекций</strong></p>
                    </div>
                    <div class="column">
                        <p>{{infoAboutApp}} </p>
                    </div>
                </div>
            </div>

            <div class="columns is-8 pd">
                <div class="column is-one-third">
                    <div class="card">
                        <div class="card-image">
                            <figure class="box">
                                <img src="../assets/appMainActivity.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <font-awesome-icon icon="mobile-alt" size="2x" :style="{ color: '#1EC9AC' }"/>
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">Список предметов</p>
                                    <p class="subtitle is-6">Предметы</p>
                                </div>
                            </div>


                            <div class="content">
                                Ищите и выбирайте нужный предмет легко.
                                <a href="#">#ЛекцииКТП</a> <a href="#">#КФУ</a>
                                <br>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="column is-one-third">
                    <div class="card">
                        <div class="card-image">
                            <figure class="box">
                                <img src="../assets/appThemesActivity.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <font-awesome-icon icon="mobile-alt" size="2x" :style="{ color: '#1EC9AC' }"/>
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">Cписок лекций</p>
                                    <p class="subtitle is-6">Лекции</p>
                                </div>
                            </div>


                            <div class="content">
                                Ищите и выбирай нужную тему легко.
                                <a href="#">#ЛекцииКТП</a> <a href="#">#КФУ</a>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column is-one-third">
                    <div class="card">
                        <div class="card-image">
                            <figure class="box">
                                <img src="../assets/appLectureActivity.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <font-awesome-icon icon="mobile-alt" size="2x" :style="{ color: '#1EC9AC' }"/>
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">Экран с лекцией</p>
                                    <p class="subtitle is-6">Лекция</p>
                                </div>
                            </div>
                            <div class="content">
                                Просматривайте и скачивайте лекцию в один клик
                                <font-awesome-icon icon="file-download" :style="{ color: '#1EC9AC' }"/>
                                .<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                heading: 'Вперед к удобству',
                subheading: 'Всего один клик',
                infoAboutApp: 'Больше нет нужды просить лекции у преподавателей. Просматривайте, скачивайте, изучайте все учебные материалы в одном месте. Интерфейс адаптирован, узучай как со сматрфона, так и с планшета где и когда удобно.'
            }
        }

    }

</script>


<style lang="sass" scoped>
    @import '../mq'


    .hero
        background: url('../assets/backgroundImage.png')
        background-size: cover

        .title
            +mobile
                font-weight: bold
            +tablet
                font-size: 2.5rem
            +desktop
                font-size: 4rem
                margin-top: 2rem

    .h2
        margin: 1.5rem 0 2rem 0 !important

    .button
        margin: 2rem 0

    .img
        max-width: 100%
        max-height: 100%
        display: block
    /* remove extra space below image */

    .box
        display: block
        margin-left: auto
        margin-right: auto
        width: 230px
        padding: 15px


</style>
