import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import bootstrap from "~/styles/bootstrap.min.css";
import mainStyle from "~/styles/main.css";
import uiKit from "~/styles/now-ui-kit.css";

export let links = () => {
  return [
    //{ rel: "stylesheet", href: bootstrap },
    { rel: "stylesheet", href: mainStyle },
    //{ rel: "stylesheet", href: uiKit }
  ];
};

export function meta() {
  return { title: "Karen Bot" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
/*
<nav className="navbar navbar-expand-lg bg-transparent">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="menuIcon.svg" width="20px" height="20px" style={{maxWidth: "none !important"}} />
          </button>
          <img src="BotLogoTransparent.png" width="50" height="50" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft: "20px !important"}}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://docs.karen.exerra.xyz">Docs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://status.exerra.xyz">Status</a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/Exerra/karen-bot" className="nav-link">Github</a>
              </li>
            </ul>
          </div>
        </nav>
 */