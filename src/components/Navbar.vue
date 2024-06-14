<script setup lang="ts">
  import { ref, Transition } from "vue";
  import { onMounted, onUnmounted } from "vue";
  import Hamburger from "./Hamburger.vue";

  import refFacebook from "../assets/fb.svg";
  import refLogo from "../assets/tbyc.jpg";
  import refX from "../assets/x.svg";

  import type { Ref } from "vue";

  const useClickOutside = (
    ref: Ref<HTMLElement | undefined> | null = null,
    callback = () => {},
  ) => {
    function handleClickOutside(event: Event) {
      if (ref?.value && !ref.value.contains(event.target as Node)) {
        callback();
      }
    }

    onMounted(() => {
      document.addEventListener("mousedown", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("mousedown", handleClickOutside);
    });
  };

  const open = ref(false);

  const handleToggle = () => {
    open.value = !open.value;
  };

  const handleClose = () => {
    open.value = false;
  };

  const container = ref<HTMLDivElement>();

  useClickOutside(container, () => handleClose());
</script>

<template>
  <nav
    class="elevation-24 sticky top-0 z-10 w-full bg-sky-800 p-4 text-slate-200"
    aria-label="Primary"
    ref="container"
  >
    <div class="flex items-center justify-between">
      <a
        href="/"
        class="outline-none focus:outline-yellow-500 focus-visible:outline-yellow-500"
      >
        <img class="h-6" :src="refLogo.src" alt="placeholder" />
      </a>
      <div class="hidden gap-x-2 md:flex">
        <a
          href="/"
          class="block rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
        >
          Home
        </a>
        <a
          href="/contact"
          class="block rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
          >Contact</a
        >
        <a
          href="http://issuu.com/tbyc/stacks/62fb3afbcb2a4f778ad75d0db5952bdf"
          class="block rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
          >Newsbuoy</a
        >
        <a
          href="/events"
          class="block rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
          >Bar & Kitchen Opening Times</a
        >
        <a
          href="/tbyc-committees"
          class="block rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
          >Committes</a
        >
        <a
          href="/history"
          class="block rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
          >History</a
        >
        <a
          href="https://www.tbyc.org/wp-admin/"
          class="block rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
          >Login</a
        >
        <a
          href="https://x.com/TBYC_UK"
          class="grid place-items-center rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
          ><img :src="refX.src" class="size-6 rounded-full bg-white" alt="X"
        /></a>
        <a
          href="https://www.facebook.com/groups/161151963919509/"
          class="grid place-items-center rounded px-2 py-1 outline-none hover:bg-blue-900 focus:bg-blue-900 focus:outline-yellow-500 focus-visible:outline-yellow-500"
          ><img :src="refFacebook.src" class="size-6" alt="facebook"
        /></a>
      </div>

      <button
        class="block h-6 w-6 md:hidden"
        @click="handleToggle"
        aria-controls="primary-navigation"
        :aria-expanded="open"
      >
        <Hamburger :open="open" />
      </button>
    </div>

    <Transition
      class="grid pt-2 md:hidden"
      enter-active-class="transition-[grid-template-rows] motion-reduce:transition-none duration-150"
      enter-from-class="grid-rows-[0fr]"
      enter-to-class="grid-rows-[1fr]"
      leave-active-class="transition-[grid-template-rows] motion-reduce:transition-none duration-150"
      leave-from-class="grid-rows-[1fr]"
      leave-to-class="grid-rows-[0fr]"
    >
      <div v-if="open">
        <div id="primary-navigation" class="flex flex-col overflow-hidden">
          <a href="/">Home</a>

          <a href="/contact">Contact</a>

          <a
            href="http://issuu.com/tbyc/stacks/62fb3afbcb2a4f778ad75d0db5952bdf"
            >Newsbuoy</a
          >

          <a href="/tbyc-committees">Committes</a>

          <a href="/history">History</a>
          <a href="https://www.tbyc.org/wp-admin/">Login</a>
          <a href="https://x.com/TBYC_UK"
            ><img :src="refX.src" class="size-6 rounded-full bg-white" alt="X"
          /></a>
          <a href="https://www.facebook.com/groups/161151963919509/"
            ><img :src="refFacebook.src" class="size-6" alt="facebook"
          /></a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
