<template>
  <NuxtPage :key="$route.fullPath" />
</template>

<style>
html {
  -webkit-text-size-adjust: 100%;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  background: #0b0a0a;
}

* {
  color: #ecebe8
}

.ellipsis {
  filter: blur(150px);
  height: 10rem;
  inset-inline-end: 0px;
  inset-inline-start: auto;
  max-width: 75%;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: -webkit-fill-available;
  z-index: 9000
}

.pc-Xydqmj {
  top: 0;
  inset-inline-start: auto;
  inset-inline-end: 0px;
  z-index: 10;
  max-width: 75%;
  height: 10rem;
  filter: blur(150px);
  background: linear-gradient(97.62deg, rgba(0, 71, 225, 0.22) 2.27%, rgba(26, 214, 255, 0.22) 50.88%, rgba(0, 220, 130, 0.22) 98.48%);
}
</style>
