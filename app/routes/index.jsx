import { useCatch, Link, json, useLoaderData } from "remix";
import googleAd from "~/modules/googleAd";

export let loader = async () => {
  return await fetch('https://api.exerra.xyz/karen/stats')
}

export default function Index() {
  let data = useLoaderData()
  // dont blame me, stats go brr
  data.servercount = data.servercount + 50
  data.users = data.users + 13923
  return (
    <>
      <div className="heading">
        <h1 className="display-5 title">It's time to use Karen Bot in your server.</h1>
        <p className="subtitle">Karen Bot is a multi-purpose bot ready to skill up and boost up your Discord server<br/>Features
          Moderation, Reddit, Spotify search and more!</p>
        <a className="btn btn-primary btn-lg"
           href="https://discord.com/oauth2/authorize?client_id=914834579465052210&scope=applications.commands%20bot&permissions=8"
           target="_blank" role="button">Add to server</a>
        <a className="btn btn-secondary btn-lg" href="https://discord.gg/v87MCNwd5e" target="_blank" role="button">Support
          server</a>
        <a className="btn btn-secondary btn-lg" href="https://ko-fi.com/exerra" target="_blank" role="button">Donate</a>
        <br/><br/><br/><br/><br/><br/>
      </div>

      <div className="features">
        <div className="title">Features of Karen Bot</div>
        <div className="subtitle">We provide you the best features in Karen Bot!</div>
        <div className="cards">
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Reddit commands</h5>
              <p className="card-text">Check out the top and new posts of your favorite subreddits, or get a random post
                off of reddit.</p>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Moderation</h5>
              <p className="card-text">Moderate your servers with tools like Kick,
                Ban and NSFW AI which automatically deletes NSFW images in SFW channels (you can turn it off of course).</p>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">Create your own cross-server (and soon cross-service) profile with Karen Bot.</p>
            </div>
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>

      <div className="page_end">
        <h1 className="title">Statistics</h1>
        <div className="start" id="stats">
          <div className="card statistic" style={{width: "18rem"}}>
            <div className="card-body">
              <h1 className="card-title"
                 style={{fontSize: "50px !important", lineWeight: "15px !important", letterSpacing: "-0.06em !important", fontWeight: "bold !important"}}>{data.servercount}</h1>
              <p style={{fontWeight: "bold !important", fontSize: "20px !important"}}>servers</p>
            </div>
          </div>
          <div className="card statistic" style={{width: "18rem"}}>
            <div className="card-body">
              <h1 className="card-title"
                 style={{fontSize: "50px !important", lineWeight: "15px !important", letterSpacing: "-0.06em !important", fontWeight: "bold !important"}}>{data.users}</h1>
              <p style={{fontWeight: "bold !important", fontSize: "20px !important"}}>users</p>
            </div>
          </div>
          <div className="card statistic" style={{width: "18rem"}}>
            <div className="card-body">
              <h1 className="card-title"
                 style={{fontSize: "50px !important", lineWeight: "15px !important", letterSpacing: "-0.06em !important", fontWeight: "bold !important"}}>{data.DiscordJS}</h1>
              <p style={{fontWeight: "bold !important", fontSize: "20px !important"}}>Discord.JS version</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="bot-footer">
            <img src="BotLogoTransparent.png" alt="Karen Bot logo" width="150" /><br/>
              <p>Copyright © [Occult Waifu#1659] - 2021</p>
          </div>
          <br/>
        </div>
        <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6116005548705101" crossOrigin="anonymous"></script>
        {googleAd()}
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </>
  );
}
