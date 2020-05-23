<!-- страничка faq-->
<template>
    <div class="faq">
        <div class="container">
            <section class="section">
                <h1 class="title">FAQ</h1>
                <h2 class="subtitle is-4">Вопросы и ответы</h2>
                <div class="columns pd">
                    <div class="column">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Зачем нужно это приложение?
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    Приложение предоставляет доступ к учебным материалам по предмету от преподавателей.
                                    Вам
                                    не
                                    придется просить скинуть их на почту, пытаться найти материалы на сайте. Просто
                                    откройте
                                    приложение, найдите лекцию и начните изучать. <strong>Легко и удобно.</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Если я не хочу постоянно тратить интрент-трафик на просмотр лекции?
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                   Вы можете скачать любую лекцию, нажав на иконку скачивания.
                                    Она загрузится на устройство в формате <strong>.pdf</strong> в папку <strong>Downloads</strong>.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Приложение бесплатное?
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    Да, абсолютно. Таким и останется.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'faq',
    }
</script>


<style lang="sass" scoped>
    @import '../mq'


    .pd
     padding: 2.5em 0 1.5em 0

    .card-content
      margin-top: 10px !important
      color: gray

    .columns
      flex-wrap: wrap



</style>
