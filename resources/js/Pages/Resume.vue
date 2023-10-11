<script setup>
</script>

<template>
        <div class="min-h-screen bg-gray-600 py-10">
            <div class="mx-auto w-min">
                <div class="min-h-screen">
                    <div class="relative">
                        <div class="react-pdf__Document relative rounded-md" style="--scale-factor:1;">
                            <div class="  react-pdf__Page  overflow-hidden rounded-md shadow-lg" data-page-number="1"
                                 style="--scale-factor:1.32711; background-color: white; position: relative; min-width: min-content; min-height: min-content;">
                                <div class="pr-10 pl-10  text-2xl">{{this}}</div>
                                <div class="flex">
                                    <div class="p-4 w-3/4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolores explicabo fugiat numquam officiis quo quod ullam. Distinctio, enim eveniet neque praesentium quidem sunt tempore totam! Nesciunt temporibus vel vitae.
                                    </div>
                                    <div class="p-4 w-1/4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis consectetur cum distinctio dolor, doloribus facere illum modi natus nesciunt odio omnis quas, sed sit suscipit totam voluptate voluptatum. Animi!
                                    </div>

                                </div>

                                <canvas class="react-pdf__Page__canvas" dir="ltr" width="790" height="1117"
                                        style="display: block; user-select: none; width: 790px; height: 1117px;"></canvas>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<!--<script setup>-->
<!--import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'-->
<!--</script>-->
