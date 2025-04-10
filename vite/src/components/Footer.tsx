import type { CSSProperties } from "react";
import { NavLink, type NavLinkRenderProps } from "react-router";

export default function Footer() {
	const linkProps = ({ isActive }: NavLinkRenderProps): CSSProperties => ({
		display: isActive ? "none" : "block",
	});

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
			<div style={{ display: "flex", gap: "0.25rem" }}>
				Check out: <NavLink to="/" style={linkProps}>Zustand implementation</NavLink>
				<NavLink to="/context" style={linkProps}>React state/context implemenattion</NavLink>
			</div>

			<span style={{ fontSize: "0.9em", textAlign: "start", color: "var(--text-muted)" }}>
				Render view using react-scan
			</span>
		</footer>
	);
}
