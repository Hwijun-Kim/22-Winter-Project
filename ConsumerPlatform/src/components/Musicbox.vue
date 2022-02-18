<template>
  <div class="col mb-5">
        <div class="card h-100">
            <!-- Product details-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">
                        <slot name="musicname">
                            default musicname
                        </slot>
                    </h5>
                    <div>0000원</div>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">구매하기</a>
                    <a class="btn btn-outline-dark mt-auto" href="#">Playlist 담기</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style  src="..\assets\css\styles.css">
</style>