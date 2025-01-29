import { useCallback, useRef } from 'react';

import useWindowListener from './useWindowListener';

const useClickOutside = (callback: (e: Event) => void) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handler = useCallback(
    (event: Event) => {
      if (!elementRef.current?.contains(event.target as Node)) {
        callback(event);
      }
    },
    [callback]
  );

  useWindowListener('mousedown', handler);

  return elementRef;
};

export default useClickOutside;
