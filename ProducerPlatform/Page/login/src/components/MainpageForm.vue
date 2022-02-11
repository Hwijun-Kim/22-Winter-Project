<template>
    <body>
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!"> {{signUpUserName}}님! 환영합니다.</a>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            Logout
                        </button>
                    </form>
                </div>
        </nav>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">생산자 페이지</h1>
                    <p class="lead fw-normal text-white-50 mb-0">등록, 정산, 통계확인을 한번에</p>
                </div>
            </div>
        </header>
        <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">개인정보</h5>
                                    정보표시
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                  <a class="btn btn-outline-dark mt-auto" href="#">자세히</a>
                                <router-link to="/profilemanage">
                                    <a class="btn btn-outline-dark mt-auto" href="#"><i class="fas fa-cog"></i></a>
                                </router-link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">음원관리</h5>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                      <router-link to="/musicmanage">
                                        <a class="btn btn-outline-dark mt-auto" href="#">음원관리 페이지로 이동</a>
                                      </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">정산</h5>
                                </div>
                            </div>
                              <div class="d-flex justify-content-center small text-warning mb-2">
                                <router-link to="/settlement">
                                  <a class="btn btn-outline-dark mt-auto" href="#">정산 페이지로 이동</a>
                                </router-link>
                              </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">통계</h5>
                                </div>
                                  <div class="d-flex justify-content-center small text-warning mb-2">
                                    <router-link to="/chart">
                                      <a class="btn btn-outline-dark mt-auto" href="#">통계 페이지로 이동</a>
                                    </router-link>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </body>
</template>

<script>


export default {

};

</script>

<style src="..\assets\css\styles.css">

</style>