import Home from "./components/home.js";
import TodayItem from "./components/organisms/TodayItem.js";
import Sidebar from "./components/sidebar.js";
import UI from "./utils/ui.js";

UI.registerComponent("Home", Home);
UI.registerComponent("Sidebar", Sidebar);
UI.registerComponent("TodayItem", TodayItem);

const sample = `<div class="title">서버 연결 현황</div>
<div id="today">
  <div class="today-item server-745620493716947026">
    <div class="header">
      <img
        src="https://cdn.discordapp.com/icons/745620493716947026/586ba8a6faa30c00f592f85ea9d770f5.png"
        alt="Server Icon"
        class="icon"
      />
      <div class="name">EQBR</div>
    </div>
    <div class="content"><canvas id="today_chart_745620493716947026" class="today-chart" /></div>
  </div>
  <div class="today-item server-628465489311563787">
    <div class="header">
      <img
        src="https://cdn.discordapp.com/icons/628465489311563787/52caad5b12afbe15e7f7bb822939a17f.png"
        alt="Server Icon"
        class="icon"
      />
      <div class="name">편들 2023 [아카이브]</div>
    </div>
    <div class="content"><canvas id="today_chart_628465489311563787" class="today-chart" /></div>
  </div>
  <div class="today-item server-979067006223536239">
    <div class="header">
      <img
        src="https://cdn.discordapp.com/icons/979067006223536239/91e94ed2970465f8565d703bfaffe0ae.png"
        alt="Server Icon"
        class="icon"
      />
      <div class="name">BotTest</div>
    </div>
    <div class="content"><canvas id="today_chart_979067006223536239" class="today-chart" /></div>
  </div>
  <div class="today-item server-1130745983534387230">
    <div class="header">
      <img
        src="https://cdn.discordapp.com/icons/1130745983534387230/fc7d41d1c2974a4b5df1bb3cebd32334.png"
        alt="Server Icon"
        class="icon"
      />
      <div class="name">TravelAI</div>
    </div>
    <div class="content"><canvas id="today_chart_1130745983534387230" class="today-chart" /></div>
  </div>
  <div class="today-item server-1025409598498283583">
    <div class="header">
      <img
        src="https://cdn.discordapp.com/icons/1025409598498283583/ffeccc981f0c5a980c36b2a95a2e2cf0.png"
        alt="Server Icon"
        class="icon"
      />
      <div class="name">편들 2024</div>
    </div>
    <div class="content"><canvas id="today_chart_1025409598498283583" class="today-chart" /></div>
  </div>
  <div class="today-item server-1016410932131397714">
    <div class="header">
      <img
        src="https://cdn.discordapp.com/icons/1016410932131397714/0b3d0719b112fc808f9535428bca2ec8.png"
        alt="Server Icon"
        class="icon"
      />
      <div class="name">평범한 듯한 오락방</div>
    </div>
    <div class="content"><canvas id="today_chart_1016410932131397714" class="today-chart" /></div>
  </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
  // console.log(HtmlParser.parseHtml(sample));
  const root = UI.$createRoot(`
    <Home/>
  `);
  root.render();
  console.log(root.children.toArray());
});

// $(document).ready(async () => {
//   data = {};
//   guilds = {};
//   users = {};

//   selectedGuildId = localStorage.getItem("selected_guild_id") ?? Object.keys(data)?.[0] ?? null;
//   localStorage.setItem("selected_guild_id", selectedGuildId);

//   // resize detect
//   window.addEventListener("resize", () => {
//     if (selectedGuildId != null) {
//       displayMainContent();
//     }
//   });

//   if (channelId != null) {
//     const sidebarElem = $(".sidebar")[0];
//     sidebarElem.style.display = "none";
//     selectedGuildId = channelId;
//   }

//   setTimeout(async () => {
//     await loadData();
//     startSSE();

//     console.log("data", data);
//     console.log("guilds", guilds);
//     console.log("users", users);
//   }, 500);
// });
