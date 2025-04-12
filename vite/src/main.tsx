import { scan } from "react-scan";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import ContextRoute from "./routes/Context.tsx";
import SimpleRoute from "./routes/Simple.tsx";
import ZustandRoute from "./routes/Zustand.tsx";

import Footer from "./components/Footer.tsx";

import "./index.css";

scan({ enabled: true });

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/" element={<ZustandRoute />} />
				<Route path="/context" element={<ContextRoute />} />
				<Route path="/simple" element={<SimpleRoute />} />
			</Routes>
			<Footer />
		</StrictMode>
	</BrowserRouter>,
);
