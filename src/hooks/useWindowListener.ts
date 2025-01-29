import { useEffect } from 'react';

const useWindowListener = (
  type: string,
  callback: (e: Event) => void,
  condition: boolean = true
) => {
  useEffect(() => {
    if (condition) {
      window.addEventListener(type, callback);
      return () => {
        window.removeEventListener(type, callback);
      };
    }
  }, [callback, condition, type]);
};

export default useWindowListener;
