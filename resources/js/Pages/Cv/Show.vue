<template>
    <!-- Page Heading -->
    <header class="bg-white border-b border-gray-100 w-1/2">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            Резюме
        </div>
    </header>
    <main>

        <div class="py-12">
            <div class="relative">
                <div class="absolute right-3 top-3 z-20 xl:fixed xl:right-10 xl:top-6">
                    <a aria-label="Close" class="block rounded-full bg-gray-200 p-2 text-gray-500 hover:bg-gray-300 active:bg-gray-400
                                xl:bg-gray-600 xl:text-white xl:hover:bg-gray-700 xl:active:bg-gray-800"
                       href="/dashboard">
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-6 w-6"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </a>
                </div>

                <div class="relative xl:flex xl:w-1/2 xl:flex-row">

                    <div class="flex justify-center p-3 md:p-6 xl:flex-1 xl:p-16 xl:pt-8">
                        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                            <div>
                                <div class="p-6 lg:p-8 bg-white border-b border-gray-200">

                                    <form>
                                        <div class="space-y-12">
                                            <div class="border-b border-gray-900/10 pb-8">
                                                <h2 class="text-base font-semibold leading-7 text-gray-900">
                                                    Данные профиля
                                                </h2>
                                                <p class="mt-1 text-sm leading-6 text-gray-600">Эта информация будет
                                                    отображаться публично, поэтому будьте осторожны с тем, чем вы
                                                    делитесь.</p>
                                                <hr class="mb-4 mt-4">
                                                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div class="sm:col-span-4">
                                                        <label for="username"
                                                               class="w-1/2 block text-sm font-medium leading-6 text-gray-900">
                                                            Имя пользователя:</label>
                                                        <div class="mt-2">
                                                            <div
                                                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                                <span
                                                                    class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                                                    dgital.group/
                                                                </span>
                                                                <input v-model="username" type="text" name="username"
                                                                       id="username" autocomplete="username"
                                                                       class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                       placeholder="rvlogachev"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-full">
                                                        <label for="cover-photo"
                                                               class="block text-sm font-medium leading-6 text-gray-900">Cover
                                                            photo</label>
                                                        <div
                                                            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                            <div class="text-center">
                                                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300"
                                                                           aria-hidden="true"/>
                                                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                                    <label for="file-upload"
                                                                           class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                                        <span>Upload a file</span>
                                                                        <input id="file-upload" name="file-upload"
                                                                               type="file" class="sr-only"/>
                                                                    </label>
                                                                    <p class="pl-1">or drag and drop</p>
                                                                </div>
                                                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF
                                                                    up to 10MB</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-full">
                                                        <label for="about"
                                                               class="block text-sm font-medium leading-6 text-gray-900">Расскажите
                                                            о себе</label>
                                                        <div class="mt-2">
                                                            <textarea v-model="description" id="about" name="about"
                                                                      rows="3"
                                                                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                        </div>
                                                        <!--                                                        <p class="mt-3 text-sm leading-6 text-gray-600">Напишите несколько предложений о себе.</p>-->
                                                    </div>




                                                </div>

                                            </div>

                                            <div class="border-b border-gray-900/10 pb-8">
                                                <h2 class="text-base font-semibold leading-7 text-gray-900">
                                                    Личные данные</h2>
                                                <p class="mt-1 text-sm leading-6 text-gray-600">
                                                    Используйте постоянный адрес, по которому вы можете получать почту.
                                                </p>

                                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div class="sm:col-span-3">
                                                        <div class="mt-auto flex h-16">
                                                            <div
                                                                class="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                                                                <div
                                                                    class="flex h-full w-full items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-gray-50 text-gray-300">
                                                                    <svg focusable="false"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         aria-hidden="true" class="h-8 w-8"
                                                                         viewBox="0 0 448 512">
                                                                        <path fill="currentColor"
                                                                              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                                                    </svg>
                                                                </div>
                                                                <label class="absolute inset-0 flex items-center justify-center bg-primary-600 bg-opacity-75 text-sm text-white opacity-0 focus-within:opacity-100 hover:opacity-100"><span>Update</span><span
                                                                    class="sr-only">User photo</span>
                                                                    <input name="img" type="file" accept="image/jpeg, image/x-png, .jpg, .jpeg, .png"
                                                                           data-section="personalDetails"
                                                                           class="absolute inset-0 cursor-pointer rounded-md border-gray-300 opacity-0"></label>
                                                            </div>
                                                            <div class="flex flex-col justify-center px-2 py-2 text-sm">
                                                                <button aria-label="Upload photo"
                                                                        class="flex items-center rounded-full px-3 py-1 hover:bg-primary-50 active:bg-primary-100">
                                                                    <svg focusable="false"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         aria-hidden="true"
                                                                         class="h-4 w-4 text-primary-500"
                                                                         viewBox="0 0 512 512">
                                                                        <path fill="currentColor"
                                                                              d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                                                                    </svg>
                                                                    <span class="ml-2 inline text-primary-600">Upload&nbsp;photo</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="first-name"
                                                               class="block text-sm font-medium leading-6 text-gray-900">
                                                            Должность
                                                        </label>
                                                        <div class="mt-2">
                                                            <input type="text" name="first-name" id="first-name"
                                                                   v-model="title" autocomplete="given-name"  placeholder="e.g. Marketing Manager"
                                                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="last-name"
                                                               class="block text-sm font-medium leading-6 text-gray-900">
                                                            Имя фамилия
                                                        </label>
                                                        <div class="mt-2">
                                                            <input type="text" name="last-name" id="last-name"
                                                                   autocomplete="family-name" v-model="name"
                                                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="email"  class="block text-sm font-medium leading-6 text-gray-900">
                                                            Email
                                                        </label>
                                                        <div class="mt-2">
                                                            <input id="email" name="email" type="text"
                                                                   autocomplete="email" v-model="email"
                                                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="email"  class="block text-sm font-medium leading-6 text-gray-900">
                                                            Телефон
                                                        </label>
                                                        <div class="mt-2">
                                                            <input id="phone" name="phone" type="text"
                                                                   autocomplete="phone" v-model="phone"
                                                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="email"  class="block text-sm font-medium leading-6 text-gray-900">
                                                            Адрес
                                                        </label>
                                                        <div class="mt-2">
                                                            <input id="address" name="address" type="text"
                                                                   autocomplete="address" v-model="address"
                                                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="border-b border-gray-900/10 pb-8">
                                                <h2 class="text-base font-semibold leading-7 text-gray-900">
                                                    Краткое резюме</h2>
                                                <p class="mt-1 text-sm leading-6 text-gray-600">
                                                    Включите краткое описание ваших навыков и опыта в 3-5 предложениях.
                                                </p>
                                                <div  class="mt-5 grid grid-cols-1 sm:grid-cols-6">
                                                    <div class="sm:col-span-12">
<!--                                                        <ckeditor :editor="editor" v-model="professional_summary" :config="editorConfig"></ckeditor>-->
                                                        <textarea v-model="professional_summary" id="about" name="about"
                                                                  rows="4"
                                                                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-b border-gray-900/10 pb-8">
                                                <h2 class="text-base font-semibold leading-7 text-gray-900">
                                                    Описание опыта</h2>
                                                <p class="mt-1 text-sm leading-6 text-gray-600">
                                                    Укажите 3-5 должностных обязанностей для каждого опыта. Укажите свой самый последний опыт сверху.
                                                </p>
                                                <div  class="mt-5 grid grid-cols-1 sm:grid-cols-6">
                                                    <div class="sm:col-span-12">
                                                        <a href="#">Добавьте место работы</a>
                                                    </div>
                                                    <div class="job1">
                                                        <Popover class="relative">
                                                            <PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                                                <span>Solutions</span>
                                                                <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                                                            </PopoverButton>

                                                            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                                                                <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                                                    <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                                                        <div class="p-4">
                                                                            <div v-for="item in solutions" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                                                <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                                                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                                                </div>
                                                                                <div>
                                                                                    <a :href="item.href" class="font-semibold text-gray-900">
                                                                                        {{ item.name }}
                                                                                        <span class="absolute inset-0" />
                                                                                    </a>
                                                                                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                                                            <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                                                <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                                                {{ item.name }}
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </PopoverPanel>
                                                            </transition>
                                                        </Popover>
                                                    </div>


                                                </div>
                                            </div>
                                            <div class="border-b border-gray-900/10 pb-12">
                                                <h2 class="text-base font-semibold leading-7 text-gray-900">
                                                    Notifications</h2>
                                                <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you
                                                    know about important changes, but you pick what else you want to
                                                    hear about.</p>

                                                <div class="mt-10 space-y-10">
                                                    <fieldset>
                                                        <legend class="text-sm font-semibold leading-6 text-gray-900">By
                                                            Email
                                                        </legend>
                                                        <div class="mt-6 space-y-6">
                                                            <div class="relative flex gap-x-3">
                                                                <div class="flex h-6 items-center">
                                                                    <input id="comments" name="comments" type="checkbox"
                                                                           class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                                </div>
                                                                <div class="text-sm leading-6">
                                                                    <label for="comments"
                                                                           class="font-medium text-gray-900">Comments</label>
                                                                    <p class="text-gray-500">Get notified when someones
                                                                        posts a comment on a posting.</p>
                                                                </div>
                                                            </div>
                                                            <div class="relative flex gap-x-3">
                                                                <div class="flex h-6 items-center">
                                                                    <input id="candidates" name="candidates"
                                                                           type="checkbox"
                                                                           class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                                </div>
                                                                <div class="text-sm leading-6">
                                                                    <label for="candidates"
                                                                           class="font-medium text-gray-900">Candidates</label>
                                                                    <p class="text-gray-500">Get notified when a
                                                                        candidate applies for a job.</p>
                                                                </div>
                                                            </div>
                                                            <div class="relative flex gap-x-3">
                                                                <div class="flex h-6 items-center">
                                                                    <input id="offers" name="offers" type="checkbox"
                                                                           class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                                </div>
                                                                <div class="text-sm leading-6">
                                                                    <label for="offers"
                                                                           class="font-medium text-gray-900">Offers</label>
                                                                    <p class="text-gray-500">Get notified when a
                                                                        candidate accepts or rejects an offer.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset>
                                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                                            Push Notifications
                                                        </legend>
                                                        <p class="mt-1 text-sm leading-6 text-gray-600">These are
                                                            delivered via SMS to your mobile phone.</p>
                                                        <div class="mt-6 space-y-6">
                                                            <div class="flex items-center gap-x-3">
                                                                <input id="push-everything" name="push-notifications"
                                                                       type="radio"
                                                                       class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                                <label for="push-everything"
                                                                       class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                                                            </div>
                                                            <div class="flex items-center gap-x-3">
                                                                <input id="push-email" name="push-notifications"
                                                                       type="radio"
                                                                       class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                                <label for="push-email"
                                                                       class="block text-sm font-medium leading-6 text-gray-900">Same
                                                                    as email</label>
                                                            </div>
                                                            <div class="flex items-center gap-x-3">
                                                                <input id="push-nothing" name="push-notifications"
                                                                       type="radio"
                                                                       class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                                <label for="push-nothing"
                                                                       class="block text-sm font-medium leading-6 text-gray-900">No
                                                                    push notifications</label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-6 flex items-center justify-end gap-x-6">
                                            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
                                                Cancel
                                            </button>
                                            <button @click.prevent="store" type="submit"
                                                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div
                        class="bottom-0 right-0 top-0 hidden w-1/2 select-none items-center justify-center bg-slate-500 xl:fixed xl:flex xl:flex-1">
                        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" style="margin:50px">
                            <div>
                                <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
                                    <span class="font-bold text-lg">
                                        {{ this.name }} - {{ this.title }}
                                    </span>
                                    <span class="right-0">
                                        ссылка
                                    </span>
                                </div>

                                <div class="bg-gray-200 bg-opacity-25  flex p-6 lg:p-8">

                                    <div class="w-3/4 p-4">
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                            </svg>
                                            <h2 class="ml-3 text-xl font-semibold text-gray-900">
                                                <a href="https://tailwindcss.com/">Профиль</a>
                                            </h2>
                                        </div>

                                        <p class="pl-10 mt-4 text-gray-500 text-sm leading-relaxed">
                                            {{ (this.professional_summary)??'Laravel Jetstream is built with Tailwind, an amazing utility first CSS framework that doesnt get in your way. You will be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips.' }}
                                        </p>
                                    </div>

                                    <div  class="w-1/4 p-4">
                                        <div class="flex items-center">
                                            <h2 class="text-xl font-semibold text-gray-900">
                                                Детали
                                            </h2>
                                        </div>

                                        <p class="mt-4 text-gray-500 text-sm leading-relaxed">
                                             {{ this.email }}
                                            {{ this.phone }}
                                            {{ this.address }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </main>
</template>

<script>

import AppLayout from '@/Layouts/AppLayout.vue';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: "Show",
    layout: AppLayout,
    props: [
        'cv',
    ],
    components: {
    },
    data() {
        return {
            // editor: ClassicEditor,
            // editorConfig: {
            //     // The configuration of the editor.
            // },
            id: this.cv.id,
            title: this.cv.title,
            description: this.cv.description,
            name: this.cv.name,
            phone: this.cv.phone,
            address: this.cv.address,
            status: this.cv.status,
            photo_url: this.cv.photo_url,
            href: this.cv.href,
            email: this.cv.email,
            professional_summary: this.cv.professional_summary,
            hobbies: this.cv.hobbies,
        }
    },
    created() {
        console.log(this.cv.name);
    },
    methods: {
        store(id) {
            this.$inertia.post('/cvs', {
                id: this.id,
                title: this.title,
                description: this.description,
                name: this.name,
                // status: this.status,
                photo_url: this.photo_url,
                // href: this.href,
                email: this.email,
                phone: this.phone,
                address: this.address,
                // professional_summary: this.professional_summary,
                // hobbies: this.hobbies,
            })
            // axios.post('/messages', {
            //     chat_id: this.chat.id,
            //     body: this.body,
            //     user_ids: this.userIds
            // })
            //     .then(res => {
            //         // console.log(res);
            //         this.messages.unshift(res.data);
            //         this.body = ''
            //     })
        },
    }
}
</script>

<style scoped>

</style>
