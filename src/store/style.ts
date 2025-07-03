import { reactive, ref, watch } from "vue";

export const titleRef = ref<HTMLElement>();
export const arRef = ref<HTMLElement>();
export const enRef = ref<HTMLElement>();
export const containerRef = ref<HTMLElement>();

export const container = reactive({
  gap: 48,
  color: "#ffffff",
  bg: "#666666",
});

export const title = reactive({
  size: 12,
  color: "#ffffff",
  bg: "",
  width: 0,
  textAligment: 'center',
  selfAligment: 'center',
});

export const arText = reactive({
  size: 20,
  color: "#ffffff",
  bg: "",
  width: 0,
  textAligment: 'center',
  selfAligment: 'center',
});

export const enText = reactive({
  size: 14,
  color: "#ffffff",
  bg: "",
  width: 0,
  textAligment: 'center',
  selfAligment: 'center',
});

window.onload = () => {
  if (titleRef.value) {
    title.width = titleRef.value.offsetWidth;
  }
  if (arRef.value) {
    arText.width = arRef.value.offsetWidth;
  }
  if (enRef.value) {
    enText.width = enRef.value.offsetWidth;
  }
};

watch(title, () => {
  if (!titleRef.value) return;

  titleRef.value.style.fontSize = title.size / 10 + "em";
  titleRef.value.style.color = title.color;
  titleRef.value.style.backgroundColor = title.bg;
  titleRef.value.style.width = title.width + "px";
  titleRef.value.style.textAlign = title.textAligment;
  titleRef.value.style.placeSelf = title.selfAligment;
});

watch(arText, () => {
  if (!arRef.value) return;

  arRef.value.style.fontSize = arText.size / 10 + "em";
  arRef.value.style.color = arText.color;
  arRef.value.style.backgroundColor = arText.bg;
  arRef.value.style.width = arText.width + "px";
  arRef.value.style.textAlign = arText.textAligment;
  arRef.value.style.placeSelf = arText.selfAligment;
});

watch(enText, () => {
  if (!enRef.value) return;

  enRef.value.style.fontSize = enText.size / 10 + "em";
  enRef.value.style.color = enText.color;
  enRef.value.style.backgroundColor = enText.bg;
  enRef.value.style.width = enText.width + "px";
  enRef.value.style.textAlign = enText.textAligment;
  enRef.value.style.placeSelf = enText.selfAligment;
});


watch(container, ()=> {
  if (!containerRef.value) return;

  containerRef.value.style.gap = container.gap+'px';
  containerRef.value.style.color = container.color;
  containerRef.value.style.backgroundColor = container.bg;
})