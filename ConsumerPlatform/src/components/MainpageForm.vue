<template>
    <body>
        <!-- Navigation-->
        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!"> {{signUpUserName}}님! 환영합니다.</a>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            Logout
                        </button>
                    </form>
                </div>
        </nav> -->
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">음원 검색 페이지</h1>
                    <p class="lead fw-normal text-white-50 mb-0">등록된 모든 음원을 살펴보세요</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Musicbox>
                        <div slot="musicname">
                            박효신-야생화
                        </div>
                    </Musicbox>
                    <Musicbox>
                        <div slot="musicname">
                            블랙핑크-Stay
                        </div>
                    </Musicbox>
                    <Musicbox>
                        <div slot="musicname">
                            아이유-겨울잠
                        </div>
                    </Musicbox>
                    <Musicbox>
                        <div slot="musicname">
                            이무진-신호등
                        </div>
                    </Musicbox>
                    <Musicbox>
                        <div slot="musicname">
                            BTS-봄날
                        </div>
                    </Musicbox>
                    <Musicbox>
                        <div slot="musicname">
                            태연-Fine
                        </div>
                    </Musicbox>
                    <Musicbox>
                        <div slot="musicname">
                            멜로망스-고백
                        </div>
                    </Musicbox>
                    <Musicbox>
                        <div slot="musicname">
                            브레이브 걸스-롤린
                        </div>
                    </Musicbox>
                </div>
            </div>
        </section>
    </body>
</template>

<script>
import Musicbox from './Musicbox.vue';

export default {
    components: {
        Musicbox,
    },
};

</script>

<style src="..\assets\css\styles.css">

</style>