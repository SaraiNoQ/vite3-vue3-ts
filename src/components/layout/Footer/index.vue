<template>
  <footer
    class="footer footer-center border-base-300 bg-base-200 text-base-content sticky bottom-0 border-t bg-opacity-90 px-4 pt-2"
  >
    <div class="flex w-full max-w-6xl flex-row items-center justify-between gap-6">
      <a
        href="https://github.com/kirklin"
        target="_blank"
        rel="nofollow"
        class="inline-flex items-center justify-center hover:opacity-90"
        ><div class="avatar mr-3">
          <div class="mask mask-squircle bg-neutral h-14 w-14 p-px">
            <img
              loading="lazy"
              width="54"
              height="54"
              :src="Avatar"
              alt="Kirk Lin"
              class="mask mask-squircle"
            />
          </div>
        </div>
        <div class="text-left">
          <p class="text-base-content text-xs text-opacity-50">Created by</p>
          <h2 class="text-base-content text-lg font-bold">Kirk Lin</h2>
        </div>
      </a>
      <div class="flex flex-col items-center gap-4 text-left sm:flex-row">
        <div class="flex gap-4 pb-4">
          <a
            href="https://github.com/kirklin/vite-boot"
            target="_blank"
            rel="nofollow"
            class="bg-base-100 flex w-[130px] flex-col items-center rounded"
          >
            <h3 class="text-base-content/50 p-2 text-xs font-bold">viteBoot™</h3>
            <p class="text-base-content/50 px-1.5 py-2 text-xs tracking-tighter">
              All Rights Reserved.
            </p>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import avatar from "~/assets/avatar.jpg";
const Avatar = avatar;
</script>
