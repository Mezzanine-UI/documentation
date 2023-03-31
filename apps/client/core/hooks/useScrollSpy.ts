import {
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useIntersectionObserver } from '@core/hooks/useIntersectionObserver';

export function useScrollSpy(
  containerRef: MutableRefObject<Element | null> | null,
) {
  const [children, setChildren] = useState<HTMLDivElement[]>([]);
  const [current, setCurrent] = useState<string>('');

  const cb = useCallback<IntersectionObserverCallback>((entries) => {
    const [entry = null] = entries.sort((a, b) => {
      return b.intersectionRatio - a.intersectionRatio;
    });

    if (entry?.isIntersecting) {
      const entryTarget = entry.target as HTMLDivElement;

      if (typeof entryTarget.dataset.scrollSpy === 'string') {
        setCurrent(entryTarget.dataset.scrollSpy);
      }
    }
  }, []);

  useIntersectionObserver(children, cb);

  useEffect(() => {
    if (containerRef?.current && !children.length) {
      setChildren(Array.from(containerRef.current.childNodes) as HTMLDivElement[]);
    }
  }, []);

  return {
    current,
    children,
    setCurrent,
  };
}
