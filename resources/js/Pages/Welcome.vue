<script setup>
import { XMarkIcon } from '@heroicons/vue/20/solid'

import { Head, Link } from '@inertiajs/vue3';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {
    ChartPieIcon,
    CursorArrowRaysIcon,
    SquaresPlusIcon,
} from '@heroicons/vue/24/outline'

const solutions = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const stats = [
    { id: 1, name: 'Завершенных ИТ проектов', value: '250 +' },
    { id: 2, name: 'Общая выручка собственных проектов', value: '$119 000 +' },
    { id: 3, name: 'Новых пользователей ежемесячно', value: '6 000' },
]
const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]
const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]
const includedFeatures = [
    'Закрытый доступ к курсам',
    'Сервисы для участников',
    'Запись на ежегодную конференцию',
    'Официальная футболка с мерчем',
]
const features = [
    {
        name: 'Создавайте резюме с легкостью',
        description:
            'Создайте свое резюме онлайн за считанные минуты, даже не выходя из своего веб-браузера.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Мы заботимся о ваших данных',
        description:
            'Все, чем вы делитесь с нами, надежно защищено нашим 256-битным SSL-шифрованием.',
        icon: LockClosedIcon,
    },
    {
        name: 'Продвинутые шаблоны резюме',
        description:
            'Наши хорошо разработанные шаблоны резюме одобрены профессионалами. Ваше резюме будет готово через 5 минут.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Скачать в формате PDF',
        description:
            'Загрузите свое резюме в формате PDF и других распространенных форматах одним щелчком мыши.',
        icon: ArrowPathIcon,
    },
]
const links = [
    { name: 'Открытые вакансии', href: 'https://dgital.pro/vacancy' },
    { name: 'Программы стажировки', href: 'https://dgital.pro/internship' },
    { name: 'Наши цифры', href: 'https://dgital.pro/values' },
    { name: 'Встреча с руководством', href: 'https://dgital.pro/director' },
]
const stats1 = [
    { name: 'Международных офиса', value: '2' },
    { name: 'Специалистов senior-level', value: '20+' },
    { name: 'Наша рабочая неделя', value: '30 ч' },
    { name: 'Количество отпусных дней', value: '36' },
]
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>

    <Head title="Welcome" />

    <div class="bg-white">

        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
                <div class="flex lg:flex-1 sm:fixed sm:top-0 sm:left-0 p-6 text-right z-10">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">dgital.group</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>

                <div class="flex lg:hidden">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard</Link>
                    <Link v-if="$page.props.auth.user" :href="route('cv')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Curriculum vitae</Link>

                    <template v-else>
                        <Link :href="route('login')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</Link>

                        <Link v-if="canRegister" :href="route('register')" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</Link>

                    </template>
                </div>
            </nav>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">dgital.group</span>
                            <img class="h-8 w-auto" src="https://dgital.group" alt="" />
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                            </div>
                            <div class="py-6">
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl py-15 sm:py-10 lg:py-10">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div class="font-semibold text-indigo-600 relative rounded-full px-3 py-1 text-lg leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Онлайн-конструктор резюме
                    </div>
                </div>
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"><b>3 %</b> резюме проходят первоначальный отбор</h1>
                    <p class="font-semibold text-indigo-600  pt-6" style="font-size: 45px;">Будьте в <b>3 %</b>.</p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Создайте свое профессионально резюме за 5 минут.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Создать резюме</a>
                    </div>
                    <p class="mt-6   text-gray-600">На сегодняшний день создано 605 резюме</p>
                </div>
            </div>
            <div class="bg-white py-10 sm:py-10">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Лучшие в мире компании нанимают наших клиентов</h2>
                    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
                        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>

    </div>


    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="font-semibold text-indigo-600  pb-4 text-base font-semibold leading-7 text-indigo-600">Профессиональный конструктор резюме</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Устройтесь на работу своей мечты</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">С помощью нашего сервиса вы создадите профессиональное резюме в 2 клика и сможете его выгрузить для собеседования в компанию мечты.</p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                        <dt class="text-base font-semibold leading-7 text-gray-900">
                            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            {{ feature.name }}
                        </dt>
                        <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden">
            <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                    <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div class="lg:pr-4">
                    <div class="lg:max-w-lg">
                        <p class="text-base font-semibold leading-7 text-indigo-600">Создать резюме быстро</p>
                        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Любая блестящая карьера начинается с хорошего резюме</h1>
                        <p class="mt-6 text-xl leading-8 text-gray-700">Прежде чем вы переступите порог офиса рекрутера отдела кадров для собеседования на работу своей мечты, ваше резюме - первое, что попадает к нему на стол.</p>
                    </div>
                </div>
            </div>
            <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
            </div>
            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div class="lg:pr-4">
                    <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                        <p>
                            Поскольку они не могут познакомиться с вами лично, чтобы убедиться в вашем остроумии, целеустремленности, целеустремленной трудовой этике и способности хорошо вписаться в любую команду, за вас должно говорить ваше резюме.
                            Вот почему важно, чтобы в вашем резюме правильно отражалось, кто вы, что вы предлагаете и почему они должны выбрать именно Вас.</p>
                        <ul role="list" class="mt-8 space-y-8 text-gray-600">
                            <li class="flex gap-x-3">
                                <CloudArrowUpIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span><strong class="font-semibold text-gray-900">Создайте резюме.</strong> С нашим сервисом вы с легкостью создадите профессиональное резюме.</span>
                            </li>
                            <li class="flex gap-x-3">
                                <LockClosedIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span><strong class="font-semibold text-gray-900">Отправьте резюме.</strong> Выгрузите и направье резюме компаниям в которых вы заинтересованы.</span>
                            </li>
                            <li class="flex gap-x-3">
                                <LockClosedIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span><strong class="font-semibold text-gray-900">Пройдите собеседование.</strong> Ожидайте приглашения и проходите собеседование с работодателем.</span>
                            </li>
                        </ul>
                        <p class="mt-8">С нами вы можете быть уверены, что ваше резюме не просто добавляется в общую кучу, а выделяется и привлекает внимание рекрутеров.</p>
                        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Создайте впечатление о Вас с первых строк!</h2>
                        <p class="mt-6">Шесть секунд. Это среднее время, которое рекрутеры тратят на просмотр вашего резюме. Особенно на тех высокооплачиваемых должностях, куда претендуют сотни людей.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Работайте у нас</h2>
                <p class="mt-6 text-lg leading-8 text-gray-300">Часто мы ищем специалистов разного профиля для работы по проектам разработки, внедрения и осуществления консалтинговых услуг для нас и наших клиентов.</p>
            </div>
            <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
                </div>
                <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="stat in stats1" :key="stat.name" class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">{{ stat.value }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl sm:text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Пользуйтесь всем без ограничений</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">У нас так же есть закрытый клуб ИТ специлистов, где мы предлагаем бесплатные инструменты для комфортной и удобной работы и обучния ИТ новыкам </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div class="p-8 sm:p-10 lg:flex-auto">
                    <h3 class="text-2xl font-bold tracking-tight text-gray-900">Стать членом клуба</h3>
                    <p class="mt-6 text-base leading-7 text-gray-600">Становясь членом клуба DGITAL.GROUP вы автоматически получаете доступ к большинству курсов на платформе и дополнительным сервисам.</p>
                    <div class="mt-10 flex items-center gap-x-4">
                        <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">Что входи в членство:</h4>
                        <div class="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                        <li v-for="feature in includedFeatures" :key="feature" class="flex gap-x-3">
                            <CheckIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            {{ feature }}
                        </li>
                    </ul>
                </div>
                <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div class="mx-auto max-w-xs px-8">
                            <p class="text-base font-semibold text-gray-600">Заплати один раз, пользуйся всегда</p>
                            <p class="mt-6 flex items-baseline justify-center gap-x-2">
                                <span class="text-5xl font-bold tracking-tight text-gray-900">$49</span>
                                <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                            </p>
                            <a href="#" class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Получить доступ
                            </a>
                            <p class="mt-6 text-xs leading-5 text-gray-600">Счета и квитанции доступны для простого возмещения расходов компании</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ stat.value }}</dd>
                </div>
            </dl>
        </div>
    </div>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
                <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Повыстье качество своего резюме.<br />Начните сегодня.</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-300">От качественного резюме и потока откликов от Ваших работодателей Вас разделяет 30 минут.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                           Начало
                        </a>
                        <a href="#" class="text-sm font-semibold leading-6 text-white"> Почитать <span aria-hidden="true">→</span></a>
                    </div>
                </div>
                <div class="relative mt-16 h-80 lg:mt-8">
                    <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="1824" height="1080" />
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Из нашего блога</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">Узнайте, как развивать свой бизнес, воспользовавшись советами наших экспертов.</p>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                        <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a :href="post.href">
                                <span class="absolute inset-0" />
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a :href="post.author.href">
                                    <span class="absolute inset-0" />
                                    {{ post.author.name }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ post.author.role }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наше руководство</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">В любое время вы можете написать напряму нашему руководству</p>
            </div>
            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li v-for="person in people" :key="person.name">
                    <div class="flex items-center gap-x-6">
                        <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
                        <div>
                            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
                            <p class="text-sm font-semibold leading-6 text-indigo-600">{{ person.role }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div class="max-w-xl lg:max-w-lg">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Подпишитесь на рассылку</h2>
                    <p class="mt-4 text-lg leading-8 text-gray-300">Свежие новости из мира бизнеса, работы и ИТ технологий</p>
                    <div class="mt-6 flex max-w-md gap-x-4">
                        <label for="email-address" class="sr-only">Email </label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Введите Ваш email" />
                        <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Подписаться</button>
                    </div>
                </div>
                <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div class="flex flex-col items-start">
                        <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                            <CalendarDaysIcon class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <dt class="mt-4 font-semibold text-white">Недельный подкаст</dt>
                        <dd class="mt-2 leading-7 text-gray-400">Здесь публикуется рубрика еженедельного подкаста по ИТ технологиям</dd>
                    </div>
                    <div class="flex flex-col items-start">
                        <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                            <HandRaisedIcon class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <dt class="mt-4 font-semibold text-white">Итоги месяца</dt>
                        <dd class="mt-2 leading-7 text-gray-400">Ежемесячно мы подбиваем итоги уходящего месяца и публикуем результаты</dd>
                    </div>
                </dl>
            </div>
        </div>
        <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
    </div>
    <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
        </div>
        <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
        </div>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p class="text-sm leading-6 text-gray-900">
                <strong class="font-semibold">DgitalCon 2023</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Присоединяйтесь к нам в Москве с 10-12 Декабря чтобы быть в курсе начала конференции.
            </p>
            <a href="#" class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Зарегистрироваться <span aria-hidden="true">&rarr;</span></a>
        </div>
        <div class="flex flex-1 justify-end">
            <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                <span class="sr-only">Dismiss</span>
                <XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
        </div>
    </div>
</template>

<style>
</style>
<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->


