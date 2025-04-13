import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";

import ContextRoute from "./routes/Context.tsx";
import SimpleRoute from "./routes/Simple.tsx";
import ZustandRoute from "./routes/Zustand.tsx";

import Footer from "./components/Footer.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Switch>
			<Route path="/" component={ZustandRoute} />
			<Route path="/context" component={ContextRoute} />
			<Route path="/simple" component={SimpleRoute} />
		</Switch>
		<Footer />
	</StrictMode>,
);
