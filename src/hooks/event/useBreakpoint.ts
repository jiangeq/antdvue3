import { ComputedRef } from 'vue';

let globalWidthRef: ComputedRef<number>;
let globalRealWidthRef: ComputedRef<number>;

export function useBreakpoint() {
  return {
    widthRef: globalWidthRef,
    realWidthRef: globalRealWidthRef,
  };
}
