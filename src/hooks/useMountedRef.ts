//useMountedRef.ts
import { useRef, useEffect } from 'react';

export function useMountedRef() {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
        return (): void => { mounted.current = false };
    });
    return mounted;
}
