import { useCatch, Link, json, useLoaderData } from "remix";

export let loader = async () => {
	return await fetch('https://api.exerra.xyz/karen/stats')
}

export default function Index() {
	let data = useLoaderData()
	return (
		<div className={"container"}>

		</div>
	);
}
