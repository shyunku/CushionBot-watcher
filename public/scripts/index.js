$(document).ready(async () => {
  data = {};
  guilds = {};
  users = {};

  selectedGuildId = localStorage.getItem("selected_guild_id") ?? Object.keys(data)?.[0] ?? null;
  localStorage.setItem("selected_guild_id", selectedGuildId);

  // resize detect
  window.addEventListener("resize", () => {
    if (selectedGuildId != null) {
      const serverData = data[selectedGuildId];
      displayMainContent();
    }
  });

  if (channelId != null) {
    const sidebarElem = $(".sidebar")[0];
    sidebarElem.style.display = "none";
    selectedGuildId = channelId;
  }

  setTimeout(async () => {
    await loadData();
    startSSE();

    console.log("data", data);
    console.log("guilds", guilds);
    console.log("users", users);
  }, 500);
});

async function loadData() {
  data = await httpGet("/data");
  if (selectedGuildId == null || (selectedGuildId != null && data[selectedGuildId] == null)) {
    selectedGuildId = Object.keys(data)?.[0] ?? null;
    localStorage.setItem("selected_guild_id", selectedGuildId);
  }

  for (let guildId in data) {
    if (guilds[guildId] == null) {
      const guildData = await httpGet(`/guild/${guildId}`);
      guilds[guildId] = guildData;
    }

    const userSessions = data[guildId];
    for (let userId in userSessions) {
      if (users[userId] != null) continue;
      const userData = await httpGet(`/user/${guildId}/${userId}`);
      users[userId] = userData;
    }
  }
  displaySidebar();
  if (selectedGuildId != null) {
    displayMainContent();
  }
}

function startSSE() {
  if (!!window.EventSource) {
    const source = new EventSource(`http://${botHost}:${botPort}/sse`);

    // disconnect when the page is closed
    $(window).bind("beforeunload", (e) => {
      if (source) {
        console.log("sse closed");
        source.close();
      }
    });

    source.onmessage = function (event) {
      try {
        const message = JSON.parse(event.data);
        const { type, data } = message;
        loadData();
      } catch (err) {
        console.error("Error parsing message: ", event.data);
      }
    };

    source.onerror = function (event) {
      console.error("EventSource failed: ", event);
    };
  } else {
    console.log("SSE not supported in this browser.");
  }
}
