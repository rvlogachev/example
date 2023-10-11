<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="mx-auto max-w-2xl px-4 py-4 lg:max-w-7xl lg:px-8">
                    <div class="flex mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                            <div v-for="cv in this.cvs" :key="cv.id" class="mr-4 group relative">
                                <a :href="route('cvs.show', cv.id)">
                                    <div
                                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img style="width: 250px;" :src="cv.imageSrc" :alt="cv.imageAlt"
                                             class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                    </div>
                                </a>
                                    <div>
                                        <div class="text-sm flex justify-between">
                                            <p class="pl-2 pt-2">{{ cv.title }}</p>
                                            <div class="relative pr-2 pt-2 rounded-full">
                                                <a :href="route('cvs.download', cv.id)" class="btnMore">
                                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg"
                                                         aria-hidden="true" class="h-5 w-5 text-gray-400"
                                                         viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                              d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                            </div>
                            <a @click.prevent="createCv" href="#">
                                <div
                                    class=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img style="width:265px" src="#" class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                            </a>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.btnMore:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(226 232 240/var(--tw-bg-opacity));
}
</style>
<script>
import AppLayout from '@/Layouts/AppLayout.vue';

const d = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
];
export default {
    name: "Index",
    layout: AppLayout,
    props: [
        'products',
        'cvs',
    ],
    methods:{
        createCv() {

            this.$inertia.post('/cv', { title: this.title, users: this.userIds })
        },
    }

}
</script>

<style scoped>

</style>
