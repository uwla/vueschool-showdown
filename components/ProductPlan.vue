<template>
  <div class="px-5 py-6 text-xs product-plan" style="border-radius: 2em; background: #293246;">
    <h3 class="mb-5 flex gap-3 items-center text-lg font-bold">
      <img :src="`/img/icon-${icon}.svg`" alt="basic plan icon">
      {{  title }}
    </h3>
    <span class="green">Includes 1 year access to:</span>
    <div class="flex flex-col gap-3 my-4">
      <span class="flex gap-3 items-center w-full"
        v-for="feat,i in active" :key="i">
        <img src="/img/icon-check.svg" alt="Checked">
        <span class="grow">{{ feat.label }}</span>
        <img src="/img/icon-info.svg" alt="Info">
      </span>
      <span class="flex gap-3 items-center w-full"
        v-for="feat,i in activeBold" :key="i">
        <img src="/img/icon-check.svg" alt="Checked">
        <span class="grow font-bold">{{ feat.label }}</span>
      </span>
      <span class="flex gap-3 items-center"
        style="opacity: 0.25"
        v-for="feat,i in inactive" :key="i">
        <img src="/img/icon-x.svg" alt="Unchecked" >
        <span class="grow">{{ feat.label }}</span>
      </span>
    </div>
    <slot></slot>
    <div class="my-5 px-6 py-8" style="background: #212435; border-radius: 1em;">
      <div class="mb-10 text-xl flex items-center gap-3">
        <span class="font-bold text-4xl">$50</span>
        <span style="color: rgb(160, 168, 195); font-size: 80%;"> / seat / month </span>
      </div>
      <div>
        <span class="font-bold mb-5 block" style="font-size: 130%">How many licenses do you need?</span>
        <client-only>
          <vue-slider
            :min="5" :max="20"
            :processStyle="{ backgroundColor: '#0bd88f' }"
            :dotStyle="{ color: '#0bd88f' }"
            :tooltipStyle="{ backgroundColor: '#0bd88f', color: '#fff' }"
            v-model="value"
          />
          <div class="flex justify-between grey">
            <span>5</span><span>20</span>
          </div>
        </client-only>
      </div>
      <div class="grid grid-cols-2 items-center text-xl mt-4">
          <div class="flex items-center justify-center gap-2 p-2"
            style="background: #1d202e; border-radius: .5em;">
            <img src="/img/icon-people.svg">
            <span class="text-2xl font-bold">{{ value }}</span>
            <span class="text-sm" style="color: rgb(160, 168, 195)">seats</span>
          </div>
          <div class="text-center green">
            26% discount
          </div>
      </div>
    </div>
    <div style="font-size: 120%">
      <ButtonGreen class="w-full p-4 mb-2 mt-4 ">
        Start  Learning
      </ButtonGreen>
      <button class="green text-center p-3 w-full ">
        Refer your manager
      </button>
    </div>
  </div>
</template>

<script>
const props = {
  title: String,
  active: Array,
  activeBold: Array,
  inactive: Array,
  icon: String,
};

export default {
  data:() => ({ value: 12 }),
  props,
}
</script>
