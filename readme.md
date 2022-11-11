# React Deep Memo

Do you need use some sort of messy object value as a hook dependant?
Are you sick of `useEffect` being called from an _unchanged_ Object.
Would you like to use Objects and Arrays in hooks more?

Use a messy object-like value as a memo with `useDeepMemo`

## Installation

`npm i react-deep-memo`

## Methods

### useDeepMemo

Like `useMemo` but it will restore state on reload and share between tabs.

```js
const obj = useDeepMemo({ key: 'value' });
useEffect(() => {
	console.log('I am called once!');
}, [obj]);
```

## License

Copyright (c) 2022, Michael Szmadzinski. (MIT License)
