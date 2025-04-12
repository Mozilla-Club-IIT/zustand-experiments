import { Link } from "react-router";

export default function Footer() {
	return (
		<footer
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "0.25rem",
				alignSelf: "start",
				fontSize: "0.9em",
				marginTop: "2rem",
			}}
		>
			<div style={{ textAlign: "start" }}>
				<span>Check out:</span>
				<ul style={{ marginTop: "0.25rem", paddingLeft: "1.15rem" }}>
					<li>
						<Link to="/">Zustand implementation</Link>
					</li>
					<li>
						<Link to="/context">React state/context implementation</Link>
					</li>
					<li>
						<Link to="/simple">Simple reference zustand implementation</Link>
					</li>
				</ul>
			</div>

			<span style={{ fontSize: "0.9em", textAlign: "start", color: "var(--text-muted)" }}>
				Render view using react-scan
			</span>
		</footer>
	);
}
