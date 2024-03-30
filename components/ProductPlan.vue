<template>
  <div class="px-5 py-6 text-xs product-plan border-radius-2">
    <h3 class="mb-5 flex gap-3 items-center text-lg font-bold">
      <img :src="`/img/icon-${icon}.svg`" alt="basic plan icon" />
      {{ title }}
    </h3>
    <span class="green">Includes 1 year access to:</span>
    <div class="flex flex-col gap-3 my-4">
      <span
        class="flex gap-3 items-center w-full"
        v-for="(feat, i) in features"
        :key="i"
      >
        <img src="/img/icon-check.svg" alt="Checked" />
        <span class="grow">{{ feat.name }}</span>
        <tooltip-info :info="feat.info" />
      </span>
      <span
        class="flex gap-3 items-center w-full"
        v-for="(feat, i) in topFeatures"
        :key="i"
      >
        <img src="/img/icon-check.svg" alt="Checked" />
        <span class="grow font-bold">{{ feat.name }}</span>
        <tooltip-info :info="feat.info" />
      </span>
      <span
        class="flex gap-3 items-center opacity-25"
        v-for="(feat, i) in inactiveFeatures"
        :key="i"
      >
        <img src="/img/icon-x.svg" alt="Unchecked" />
        <span class="grow">{{ feat.name }}</span>
      </span>
    </div>
    <slot></slot>
    <div class="my-5 px-6 py-8 border-radius-1 product-plan-subcard">
      <div class="mb-10 text-xl flex items-center gap-3">
        <span class="font-bold text-4xl">$50</span>
        <span class="grey font-80"> / seat / month </span>
      </div>
      <div class="product-plan-license">
        <span class="font-bold mb-5 block font-130"
          >How many licenses do you need?</span
        >
        <client-only>
          <vue-slider
            :min="5"
            :max="20"
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
      <div
        class="grid grid-cols-2 items-center text-xl mt-4 product-plan-discount"
      >
        <div class="flex items-center justify-center gap-2 p-2">
          <img src="/img/icon-people.svg" />
          <span class="text-2xl font-bold">{{ value }}</span>
          <span class="text-sm grey">seats</span>
        </div>
        <div class="text-center green">26% discount</div>
      </div>
    </div>
    <div class="call-to-action">
      <ButtonGreen class="w-full p-4 mb-2 mt-4"> Start Learning </ButtonGreen>
      <button class="green text-center p-3 w-full">Refer your manager</button>
    </div>
  </div>
</template>

<script>
const props = {
  title: String,
  features: Array,
  topFeatures: Array,
  inactiveFeatures: Array,
  icon: String,
};

export default {
  data: () => ({ value: 12 }),
  props,
};
</script>
