/** @jest-environment jsdom */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react';
import type { RenderHookResult } from '@testing-library/react';
import useDeepMemo from './deepMemo';

describe('deepMemo', () => {
	let renderCount = 0;
	let { result, rerender } = {} as RenderHookResult<any, any>;

	beforeEach(() => {
		const hook = renderHook((value) => {
			renderCount += 1;
			return useDeepMemo(value);
		});
		result = hook.result;
		rerender = hook.rerender;

		renderCount = 0;
	});

	it('should memo many things', () => {
		rerender(undefined);
		expect(result.current).toEqual(undefined);
		rerender(1);
		expect(result.current).toEqual(1);
		rerender(NaN);
		expect(result.current).toEqual(NaN);
		rerender('string');
		expect(result.current).toEqual('string');
		rerender(null);
		expect(result.current).toEqual(null);
		rerender([]);
		expect(result.current).toEqual([]);
		rerender({});
		expect(result.current).toEqual({});
	});

	it('should use the previous equal value', () => {
		const a = { a: 'b' };
		const b = { a: 'b' };
		rerender(a);
		expect(result.current).toBe(a);

		rerender(b);
		expect(result.current).toBe(a);
	});

	it('should render once', () => {
		rerender({});
		expect(result.current).toEqual({});
		expect(renderCount).toBe(1);

		rerender({});
		expect(renderCount).toBe(2);
	});
});
