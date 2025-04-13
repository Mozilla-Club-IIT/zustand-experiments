import { Link } from "wouter";

import BxFile from "./icons/File";
import BxlGithub from "./icons/Github";

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

			<div className="footer-linklist">
				<a href="https://github.com/Mozilla-Club-IIT/zustand-experiments" target="_blank">
					<BxlGithub className="icon" />
					Source
				</a>
				<a href="https://mozilla-iit.org" target="_blank">
					<BxFile className="icon" />
					Article
				</a>
			</div>
		</footer>
	);
}
