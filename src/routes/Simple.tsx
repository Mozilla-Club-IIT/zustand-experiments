import { useSyncExternalStore } from "react";

type Get<T> = () => T;
type SetPrev<T> = (prev: T) => Partial<T>;
type Set<T> = (partial: T | SetPrev<T>) => void;
type StateParam<T> = (set: Set<T>, get: Get<T>) => T;
type Selector<T, V> = (state: T) => V;
type Listener<T> = (state: T) => void;

// Complete implementation: https://github.com/pmndrs/zustand/blob/35f5cbff1f8d0e4dd461b496489efc6ad52abc76/src/vanilla.ts#L60
function create<T>(stateParam: StateParam<T>) {
	let state: T;
	const listeners = new Set<Listener<T>>();

	// Adds a listener that calls a function with the new data
	// and returns a function to unsubscribe
	const subscribe = (listener: Listener<T>) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};

	const get: Get<T> = () => state;

	// Sets the new state, calls every listener subscribed notifying the change
	const set: Set<T> = (partial) => {
		if (Object.is(partial, state)) return;

		const next = typeof partial === "function" ? (partial as SetPrev<T>).call(undefined, get()) : partial;
		state = Object.assign({}, state, next);
		listeners.forEach((listener) => listener(state));
	};

	const initialState = (state = stateParam(set, get));

	// Uses react's useSyncExternalStore
	// Read: https://react.dev/reference/react/useSyncExternalStore
	return <U extends unknown>(selector: Selector<T, U>) =>
		useSyncExternalStore(
			subscribe,
			() => selector(state), // <- called every time the function returned by subscribe is called
			() => selector(initialState), // <- Server state
		);
}

type CounterStore = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

const useCounterStore = create<CounterStore>((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default function SimpleRoute() {
	return (
		<>
			<CountSpan />
			<div>
				<p className="description">
					This example showcases a simple reference implementation of how zustand internally works. Check
					where the renders are occuring.
				</p>
			</div>
			<div className="count-controls">
				<CountIncrement />
				<CountDecrement />
			</div>
		</>
	);
}

function CountSpan() {
	const count = useCounterStore((x) => x.count);
	return <span className="count-span">Count: {count}</span>;
}

function CountIncrement() {
	const increment = useCounterStore((x) => x.increment);
	return <button type="button" onClick={increment}>+ Increment</button>;
}

function CountDecrement() {
	const disabled = useCounterStore((x) => x.count <= 0);
	const decrement = useCounterStore((x) => x.decrement);

	return <button type="button" onClick={decrement} disabled={disabled}>- Decrement</button>;
}

SimpleRoute.displayName = "SimpleRoute";
CountSpan.displayName = "CountSpan";
CountIncrement.displayName = "CountIncrement";
CountDecrement.displayName = "CountDecrement";
