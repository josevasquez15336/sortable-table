import { onBeforeUnmount, onMounted, Ref } from "vue";
import { sleep } from "../utils/sleep";

export default function useDetectOutsideClick(
  component: Ref<HTMLElement | null>,
  callback: () => void
) {
  if (!component) return;
  const listener: EventListener = (event) => {
    if (
      event.target !== component.value &&
      event.composedPath().includes(component.value as EventTarget)
    )
      return;

    callback();
  };
  onMounted(async () => {
    await sleep();
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return { listener };
}
