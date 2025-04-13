import { createContext, type ReactNode, useContext, useState } from "react";

type CounterContextType = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

function useCounter() {
	const context = useContext(CounterContext);
	if (!context) {
		throw new Error("useCounter must be used within a CounterProvider");
	}
	return context;
}

function CounterProvider({ children }: { children: ReactNode }) {
	const [count, setCount] = useState(0);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);

	return (
		<CounterContext.Provider value={{ count, increment, decrement }}>
			{children}
		</CounterContext.Provider>
	);
}

export default function ContextRoute() {
	return (
		<CounterProvider>
			<CountSpan />
			<div>
				<p className="description">
					This example shows how using React Context and useState could manage global state across your
					webapp. Try changing the count and see where the renders occur.
				</p>
			</div>
			<div className="count-controls">
				<CountIncrement />
				<CountDecrement />
			</div>
		</CounterProvider>
	);
}

function CountSpan() {
	const { count } = useCounter();
	return <span className="count-span">Count: {count}</span>;
}

function CountIncrement() {
	const { increment } = useCounter();
	return <button type="button" onClick={increment}>+ Increment</button>;
}

function CountDecrement() {
	const { count, decrement } = useCounter();
	const disabled = count <= 0;

	return (
		<button type="button" onClick={decrement} disabled={disabled}>
			- Decrement
		</button>
	);
}
