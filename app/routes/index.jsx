import { useCatch, Link, json, useLoaderData } from "remix";

export let loader = async () => {
	return await fetch('https://api.exerra.xyz/karen/stats')
}

export default function Index() {
	let data = useLoaderData()
	return (
		<div className={"container"}>
			<div className="header">

				<div className="inner-header flex">
					<h1>Karen Bot</h1>
				</div>

				<a href={"https://discord.com/oauth2/authorize?client_id=914834579465052210&scope=applications.commands%20bot&permissions=8"}>Invite to server</a>

				<br /><br /><br /><br /><br /><br /><br /><br />

				<div>
					<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
						 viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
						<defs>
							<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
						</defs>
						<g className="parallax">
							<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
							<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
							<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
							<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
						</g>
					</svg>
				</div>

			</div>

			<br /><br /><br /><br /><br />

			<div className={"content"}>
				<h1 className={"flex"}>Enjoy being treated nicely?</h1>
				<p className={"flex"}>Too bad! Karen, unlike literally 97% of all Discord bots does not care about your stupid little feelings.</p>


				<br /><br /><br /><br /><br />

				<h1 className={"flex"}>Features</h1>
				<div className="flex">
					<div className={"largeWidget purple"}>
						<h1>Profile</h1>
						<p>Cross-server profile system</p>
					</div>
					<div className={"largeWidget blue"}>
						<h1>Auto</h1>
						<p>Auto Spotify and Brew.sh embeds</p>
					</div>
					<div className={"largeWidget teal"}>
						<h1>Search</h1>
						<p>Search in various services</p>
					</div>
				</div>
				<br /><br /><br /><br /><br /><br /><br /><br /><br />
				<h1 className={"flex"}>Statistics</h1>
				<div className={"flex"}>
					<div className={"smallWidget purple"}>
						<h1>{data.servercount}</h1>
						<p>guilds</p>
					</div>
					<div className={"smallWidget teal"}>
						<h1>{data.users}</h1>
						<p>members</p>
					</div>
					<div className={"smallWidget blue"}>
						<h1>{data.DiscordJS}</h1>
						<p>DiscordJS version</p>
					</div>
				</div>
				<br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>

			<footer>
				<br /><br /><br /><br /><br /><br /><br /><br /><br />
			</footer>
		</div>
	);
}
