/*!
 * React Deep Memo <https://github.com/smujmaiku/react-deep-memo>
 * Copyright(c) 2022 Michael Szmadzinski
 * MIT Licensed
 */

import { useMemo, useRef } from 'react';
import deepEqual from 'deep-equal';

/**
 * Use a messy object like value as a memo
 */
export default function useDeepMemo<T>(value: T): T {
	const ref = useRef(value);

	const result = useMemo(
		() => (deepEqual(value, ref.current) ? ref.current : value),
		[value]
	);

	ref.current = result;

	return result;
}
