import { computed, unref } from 'vue';
import { FormErrorsSymbol } from './symbols';
import { MaybeReactive } from './types';
import { injectWithSelf } from './utils';

/**
 * Gives access to a single field error
 */
export function useFieldError(path: MaybeReactive<string>) {
  const errors = injectWithSelf(FormErrorsSymbol);

  return computed(() => {
    return errors?.value?.[unref(path)] as string | undefined;
  });
}
