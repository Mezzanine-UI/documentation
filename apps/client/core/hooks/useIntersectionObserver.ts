/* eslint-disable @typescript-eslint/no-empty-function */
import {
  MutableRefObject, useEffect,
} from 'react';

export type ObserverTarget = MutableRefObject<Element | null> | null;

export function useIntersectionObserver(
  target: Element[] | null,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) {
  useEffect(() => {
    const observer$ =
      typeof window !== 'undefined'
        ? new window.IntersectionObserver(callback, {
          root: options?.root || null,
          rootMargin: options?.rootMargin || '0px',
          threshold: options?.threshold || 0,
        })
        : null;

    const observables = target
      ? ((Array.isArray(target) ? target : [target]).filter(
        (o) => o,
      ) as Element[])
      : null;

    if (!observables || !observables.length || !observer$) return () => {};

    observables.forEach((observable) => observer$.observe(observable));

    return () => {
      observer$.disconnect();
    };
  }, [target, callback, options]);
}
