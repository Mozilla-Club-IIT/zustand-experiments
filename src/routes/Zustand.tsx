import { create } from "zustand";

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

export default function ZustandRoute() {
	return (
		<>
			<CountSpan />
			<div>
				<p style={{ maxWidth: "75ch" }}>
					This example is on how using zustand could optimize your react application if you use global state
					across your webapp. Try changing the count and see where the renders are being occured
				</p>
			</div>
			<div
				style={{
					display: "flex",
					gap: "0.5rem",
					alignSelf: "center",
				}}
			>
				<CountIncrement />
				<CountDecrement />
			</div>
		</>
	);
}

function CountSpan() {
	const count = useCounterStore((x) => x.count);
	return <span style={{ fontSize: "1.75em" }}>Count: {count}</span>;
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
