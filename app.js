const servers = [
  {
    id: "srv-1",
    name: "B26-6454-Matt-1",
    health: "Healthy",
    model: "UCSC-C220-...",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "512.0",
    serverProfile: "C220_M6...",
    firmware: "4.2(3m)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "256.0",
    hclStatus: "Incomplete",
    hclLevel: "neutral",
    profileWarning: false,
    linked: false,
    location: "New York, NY 10001",
    power: "On",
    serial: "WZP23230LGQ",
    ip: "10.24.81.22",
  },
  {
    id: "srv-2",
    name: "B26-6454-Matt-1-1",
    health: "Healthy",
    model: "UCSX-210C-M6",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "512.0",
    serverProfile: "B26-X-SP...",
    firmware: "5.4(0.250047)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "140.8",
    hclStatus: "Not Listed",
    hclLevel: "warning",
    profileWarning: true,
    linked: false,
    location: "Metrotech Center, Brooklyn",
    power: "On",
    serial: "B26X210CM601",
    ip: "10.24.81.23",
  },
  {
    id: "srv-3",
    name: "B26-6454-Matt-1-2",
    health: "Healthy",
    model: "UCSX-210C-M6",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "512.0",
    serverProfile: "B26-X-SP...",
    firmware: "5.3(0.250001)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "145.6",
    hclStatus: "Not Listed",
    hclLevel: "warning",
    profileWarning: true,
    linked: false,
    location: "-",
    power: "On",
    serial: "B26X210CM602",
    ip: "10.24.81.24",
  },
  {
    id: "srv-4",
    name: "B26-6454-Matt-1-3",
    health: "Healthy",
    model: "UCSX-210C-M6",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "2048.0",
    serverProfile: "B26-X-SP...",
    firmware: "5.4(0.250047)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "145.6",
    hclStatus: "Not Listed",
    hclLevel: "warning",
    profileWarning: true,
    linked: false,
    location: "-",
    power: "On",
    serial: "B26X210CM603",
    ip: "10.24.81.25",
  },
  {
    id: "srv-5",
    name: "B26-6454-Matt-1-4",
    health: "Healthy",
    model: "UCSX-210C-M6",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "1024.0",
    serverProfile: "B26-X-SP...",
    firmware: "5.4(0.250047)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "182.4",
    hclStatus: "Not Listed",
    hclLevel: "warning",
    profileWarning: true,
    linked: false,
    location: "2 C 7th St, San Francisco",
    power: "On",
    serial: "B26X210CM604",
    ip: "10.24.81.26",
  },
  {
    id: "srv-6",
    name: "B26-6454-Matt-1-5",
    health: "Healthy",
    model: "UCSX-210C-M6",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "512.0",
    serverProfile: "B26-X-SP...",
    firmware: "5.4(0.250047)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "145.6",
    hclStatus: "Not Listed",
    hclLevel: "warning",
    profileWarning: true,
    linked: false,
    location: "-",
    power: "On",
    serial: "B26X210CM605",
    ip: "10.24.81.27",
  },
  {
    id: "srv-7",
    name: "B26-6454-Matt-1-6",
    health: "Healthy",
    model: "UCSX-210C-M6",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "512.0",
    serverProfile: "B26-X-SP...",
    firmware: "5.3(0.250001)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "184.0",
    hclStatus: "Validated",
    hclLevel: "healthy",
    profileWarning: true,
    linked: false,
    location: "50 E 5th St, New York",
    power: "On",
    serial: "B26X210CM606",
    ip: "10.24.81.28",
  },
  {
    id: "srv-8",
    name: "B26-6454-Matt-1-7",
    health: "Healthy",
    model: "UCSX-210C-M6",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "512.0",
    serverProfile: "B26-X-SP...",
    firmware: "5.3(0.250001)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "145.6",
    hclStatus: "Validated",
    hclLevel: "healthy",
    profileWarning: true,
    linked: false,
    location: "40 B 3th St, New York",
    power: "Off",
    serial: "B26X210CM607",
    ip: "10.24.81.29",
  },
  {
    id: "srv-9",
    name: "B26-6454-Matt-1-8",
    health: "Healthy",
    model: "UCSX-210C-M6",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "1024.0",
    serverProfile: "B26-X-SP...",
    firmware: "5.3(0.250001)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "182.4",
    hclStatus: "Validated",
    hclLevel: "healthy",
    profileWarning: true,
    linked: false,
    location: "32 A 2th St, New York",
    power: "Off",
    serial: "B26X210CM608",
    ip: "10.24.81.30",
  },
  {
    id: "srv-10",
    name: "B26-6454-Matt-2",
    health: "Healthy",
    model: "UCSC-C220-...",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "512.0",
    serverProfile: "",
    firmware: "4.3(6.250040)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "Active",
    cpu: "128.0",
    hclStatus: "Incomplete",
    hclLevel: "neutral",
    profileWarning: false,
    linked: false,
    location: "-",
    power: "On",
    serial: "WZP23231ABC",
    ip: "10.24.81.31",
  },
  {
    id: "srv-11",
    name: "C220-WZP23320DLP",
    health: "Healthy",
    model: "UCSC-C220-...",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "768.0",
    serverProfile: "Custom_P...",
    firmware: "4.3(2.250037)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "N/A",
    cpu: "84.0",
    hclStatus: "Not Listed",
    hclLevel: "warning",
    profileWarning: true,
    linked: false,
    location: "-",
    power: "On",
    serial: "WZP23320DLP",
    ip: "10.24.81.32",
  },
  {
    id: "srv-12",
    name: "C220-WZP27420F19",
    health: "Healthy",
    model: "UCSC-C220-...",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "256.0",
    serverProfile: "SP-C220-...",
    firmware: "4.3(2.230207)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "N/A",
    cpu: "158.4",
    hclStatus: "Incomplete",
    hclLevel: "neutral",
    profileWarning: true,
    linked: false,
    location: "-",
    power: "On",
    serial: "WZP27420F19",
    ip: "10.24.81.33",
  },
  {
    id: "srv-13",
    name: "C220M5-WZP23230LJ6",
    health: "Critical",
    model: "UCSC-C220-...",
    contractStatus: "Not Covered",
    ucsDomain: "B26-6454-Matt",
    memory: "768.0",
    serverProfile: "",
    firmware: "4.3(2.250037)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "N/A",
    cpu: "73.6",
    hclStatus: "Not Listed",
    hclLevel: "warning",
    profileWarning: false,
    linked: false,
    location: "-",
    power: "On",
    serial: "WZP23230LJ6",
    ip: "10.24.81.34",
  },
  {
    id: "srv-14",
    name: "C845-5080000EM3S",
    health: "Healthy",
    model: "CAI-845A-M8",
    contractStatus: "Not Covered",
    ucsDomain: "",
    memory: "1024.0",
    serverProfile: "",
    firmware: "2.0(99.260011)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "N/A",
    cpu: "640.0",
    hclStatus: "Incomplete",
    hclLevel: "neutral",
    profileWarning: false,
    linked: true,
    location: "-",
    power: "Off",
    serial: "5080000EM3S",
    ip: "10.24.81.35",
  },
  {
    id: "srv-15",
    name: "C845-WZP2952A92G",
    health: "Healthy",
    model: "CAI-845A-M8",
    contractStatus: "Not Covered",
    ucsDomain: "",
    memory: "1024.0",
    serverProfile: "",
    firmware: "2.0(1.250127)",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "N/A",
    cpu: "640.0",
    hclStatus: "Incomplete",
    hclLevel: "neutral",
    profileWarning: false,
    linked: false,
    location: "-",
    power: "On",
    serial: "WZP2952A92G",
    ip: "10.24.81.36",
  },
  {
    id: "srv-16",
    name: "C885A-WIH29090001",
    health: "Warning",
    model: "UCSC-C885A-...",
    contractStatus: "Not Covered",
    ucsDomain: "",
    memory: "2304.0",
    serverProfile: "",
    firmware: "1.0.32",
    advisory: "No",
    licenseTier: "Advantage",
    operational: "N/A",
    cpu: "640.0",
    hclStatus: "Not Evaluated",
    hclLevel: "neutral",
    profileWarning: false,
    linked: false,
    location: "-",
    power: "On",
    serial: "WIH29090001",
    ip: "10.24.81.37",
  },
];

const TOTAL_RESULTS = 80;

const state = {
  query: "",
  selectedId: "",
  mode: "split",
  overlay: "Health",
  filters: new Set(["Healthy", "Warning", "Critical"]),
  mapScale: 1,
  mapOrigin: { x: 50, y: 50 },
  clusterExpanded: false,
};

const table = document.querySelector("#server-table");
const resultsCount = document.querySelector("#results-count");
const searchInput = document.querySelector("#server-search");
const shell = document.querySelector(".servers-shell");
const filterToggle = document.querySelector("#filter-toggle");
const filterPanel = document.querySelector("#filter-panel");
const exportButton = document.querySelector("#export-button");
const toast = document.querySelector("#toast");
const splitWorkspace = document.querySelector("#split-workspace");
const splitResizer = document.querySelector("#split-resizer");
const mapCanvas = document.querySelector("#map-canvas");
const overlayMenu = document.querySelector("#overlay-menu");
const overlayOptions = document.querySelector("#overlay-options");
const overlayLabel = document.querySelector("#overlay-label");
const drawer = document.querySelector("#server-drawer");
const drawerName = document.querySelector("#drawer-name");
const drawerPairs = document.querySelector("#drawer-pairs");
let toastTimer;
let isResizingSplit = false;
const splitConfig = {
  totalWidth: 1544,
  handleWidth: 42,
  minTable: 540,
  maxTable: 1082,
  defaultTable: 767,
  storageKey: "intersight-server-map-table-width-v2",
};
const mapMarkerPositions = [
  ["#cluster-marker", 43, 43],
  [".location-marker.loc-a", 40.8, 40.7],
  [".location-marker.loc-b", 45.1, 42.3],
  [".location-marker.loc-c", 42.4, 46.2],
  [".pin-marker.critical", 79.5, 38.5],
  [".pin-marker.healthy.one", 80, 60.5],
  [".pin-marker.healthy.two", 88, 63.5],
];

function savedTableWidth() {
  const saved = Number(window.localStorage.getItem(splitConfig.storageKey));
  return Number.isFinite(saved) && saved > 0 ? saved : splitConfig.defaultTable;
}

filterPanel.hidden = true;
overlayOptions.hidden = true;
drawer.hidden = true;

function setAppScale() {
  const scale = Math.min(window.innerWidth / 1920, 1);
  document.documentElement.style.setProperty("--app-scale", scale.toFixed(4));
}

setAppScale();
window.addEventListener("resize", setAppScale);

state.tableWidth = savedTableWidth();

function clampTableWidth(width) {
  return Math.min(splitConfig.maxTable, Math.max(splitConfig.minTable, width));
}

function setTableWidth(width, persist = false) {
  const nextWidth = Math.round(clampTableWidth(width));
  state.tableWidth = nextWidth;
  splitWorkspace.style.setProperty("--table-pane-width", `${nextWidth}px`);
  splitResizer.setAttribute("aria-valuenow", String(nextWidth));
  if (persist) {
    window.localStorage.setItem(splitConfig.storageKey, String(nextWidth));
  }
}

function setMarkerZoomPositions() {
  const { x: originX, y: originY } = state.mapOrigin;
  mapMarkerPositions.forEach(([selector, x, y]) => {
    const marker = document.querySelector(selector);
    if (!marker) return;
    marker.style.left = `${originX + (x - originX) * state.mapScale}%`;
    marker.style.top = `${originY + (y - originY) * state.mapScale}%`;
  });
}

function resetClusterZoom() {
  state.mapScale = 1;
  state.mapOrigin = { x: 50, y: 50 };
  state.clusterExpanded = false;
}

function expandClusterZoom() {
  state.mapScale = 1.72;
  state.mapOrigin = { x: 43, y: 43 };
  state.clusterExpanded = true;
  state.mode = "map";
}

function widthFromPointer(event) {
  const rect = splitWorkspace.getBoundingClientRect();
  const scale = rect.width / splitConfig.totalWidth || 1;
  const handleOffset = (splitConfig.handleWidth * scale) / 2;
  return (event.clientX - rect.left - handleOffset) / scale;
}

function beginResize(event) {
  if (state.mode !== "split") return;
  event.preventDefault();
  isResizingSplit = true;
  if (splitResizer.setPointerCapture) {
    splitResizer.setPointerCapture(event.pointerId);
  }
  splitResizer.classList.add("dragging");
  splitWorkspace.classList.add("resizing");
  setTableWidth(widthFromPointer(event));
}

function resizeFromPointer(event) {
  if (!isResizingSplit) return;
  event.preventDefault();
  setTableWidth(widthFromPointer(event));
}

function endResize(event) {
  if (!isResizingSplit) return;
  isResizingSplit = false;
  if (splitResizer.hasPointerCapture && splitResizer.hasPointerCapture(event.pointerId)) {
    splitResizer.releasePointerCapture(event.pointerId);
  }
  splitResizer.classList.remove("dragging");
  splitWorkspace.classList.remove("resizing");
  setTableWidth(state.tableWidth, true);
}

splitResizer.addEventListener("pointerdown", beginResize);
splitResizer.addEventListener("dblclick", () => setTableWidth(splitConfig.defaultTable, true));
document.addEventListener("pointermove", resizeFromPointer);
document.addEventListener("pointerup", endResize);
document.addEventListener("pointercancel", endResize);
splitResizer.addEventListener("keydown", (event) => {
  const keySteps = {
    ArrowLeft: -32,
    ArrowRight: 32,
    Home: splitConfig.minTable - state.tableWidth,
    End: splitConfig.maxTable - state.tableWidth,
  };
  if (!(event.key in keySteps)) return;
  event.preventDefault();
  setTableWidth(state.tableWidth + keySteps[event.key], true);
});

function visibleServers() {
  const query = state.query.trim().toLowerCase();
  return servers.filter((server) => {
    const haystack = [
      server.name,
      server.health,
      server.model,
      server.contractStatus,
      server.ucsDomain,
      server.memory,
      server.serverProfile,
      server.firmware,
      server.advisory,
      server.licenseTier,
      server.operational,
      server.cpu,
      server.hclStatus,
      server.location,
      server.power,
      server.serial,
      server.ip,
    ]
      .join(" ")
      .toLowerCase();
    return state.filters.has(server.health) && (!query || haystack.includes(query));
  });
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function iconSort() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7h8l-4-4-4 4Zm8 10H8l4 4 4-4Z" /></svg>`;
}

function healthIcon(health) {
  if (health === "Healthy") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10.1 14.8 6.7-6.7 1.4 1.4-8.1 8.1-4.3-4.3 1.4-1.4 2.9 2.9Z" /></svg>`;
  }
  if (health === "Warning") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20L12 3Zm1 13h-2V9h2v7Zm0 3h-2v-2h2v2Z" /></svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 6h2v8h-2V6Zm0 10h2v2h-2v-2ZM12 2 1 21h22L12 2Z" /></svg>`;
}

function contractIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5.5v6.7c0 4.4 3.3 8.5 8 9.8 4.7-1.3 8-5.4 8-9.8V5.5L12 2Zm1 13h-2V8h2v7Zm0 3h-2v-2h2v2Z" /></svg>`;
}

function warningIcon() {
  return `<svg class="inline-warning" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20L12 3Zm1 13h-2V9h2v7Zm0 3h-2v-2h2v2Z" /></svg>`;
}

function hclIcon(level) {
  if (level === "healthy") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10.1 14.8 6.7-6.7 1.4 1.4-8.1 8.1-4.3-4.3 1.4-1.4 2.9 2.9Z" /></svg>`;
  }
  if (level === "warning") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20L12 3Zm1 13h-2V9h2v7Zm0 3h-2v-2h2v2Z" /></svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 17h2v-2h-2v2Zm1-14a7 7 0 0 0-7 7h2a5 5 0 1 1 6.1 4.9c-1.3.3-2.1 1.3-2.1 2.6v.5h2v-.5c0-.4.2-.6.7-.8A7 7 0 0 0 12 3Z" /></svg>`;
}

function powerStateIcon(power) {
  const title = power === "On" ? "Powered on" : "Powered off";
  const className = power === "On" ? "on" : "off";
  return `<span class="power-state ${className}" title="${title}" aria-label="${title}">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 2h2v10h-2V2Zm5 3.4 1.4-1.4A9 9 0 1 1 6.6 4L8 5.4A7 7 0 1 0 16 5.4Z" /></svg>
  </span>`;
}

function chainIcon() {
  return `<svg class="chain-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 13.5 7.1 12l-1.4 1.4a3 3 0 0 0 4.2 4.2l2.1-2.1a3 3 0 0 0 0-4.2l-1.4 1.4a1 1 0 0 1 0 1.4L8.5 16.2a1 1 0 1 1-1.4-1.4l1.4-1.3Zm7-3L16.9 12l1.4-1.4a3 3 0 0 0-4.2-4.2L12 8.5a3 3 0 0 0 0 4.2l1.4-1.4a1 1 0 0 1 0-1.4l2.1-2.1a1 1 0 0 1 1.4 1.4l-1.4 1.3Z" /></svg>`;
}

function renderTable() {
  const rows = visibleServers();
  const displayedCount = state.query ? rows.length : TOTAL_RESULTS;
  resultsCount.textContent = `${displayedCount} ${displayedCount === 1 ? "result" : "results"}`;

  const header = `
    <div class="server-row header" aria-hidden="true">
      <span class="select-cell"><span class="checkbox"></span></span>
      <span class="sort">Name ${iconSort()}</span>
      <span class="sort">Model ${iconSort()}</span>
      <span class="sort">Contract Status ${iconSort()}</span>
      <span class="sort">Health ${iconSort()}</span>
      <span class="sort">UCS Dom... ${iconSort()}</span>
      <span class="sort">Memory ... ${iconSort()}</span>
      <span class="sort">Server Pr... ${iconSort()}</span>
      <span class="sort">Firmware Version ${iconSort()}</span>
      <span class="sort">A. ${iconSort()}</span>
      <span class="sort">License T... ${iconSort()}</span>
      <span class="icon-header">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 17h2v-2h-2v2Zm1-14a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" /></svg>
        ${iconSort()}
      </span>
      <span class="sort">CPU ... ${iconSort()}</span>
      <span class="hcl-header">HCL
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-8 12h6l-1 8 8-12h-6l1-8Z" /></svg>
      </span>
      <span></span>
    </div>`;

  const body = rows
    .map((server) => {
      const selected = server.id === state.selectedId ? " selected" : "";
      return `
        <button class="server-row${selected}" type="button" data-id="${server.id}">
          <span class="select-cell"><span class="checkbox"></span></span>
          <span class="name-link">${powerStateIcon(server.power)}${server.name}${server.linked ? chainIcon() : ""}</span>
          <span class="truncate">${server.model}</span>
          <span><span class="status-pill contract">${contractIcon()}${server.contractStatus}</span></span>
          <span><span class="status-pill ${server.health}">${healthIcon(server.health)}${server.health}</span></span>
          <span class="profile-link">${server.ucsDomain || ""}</span>
          <span class="number-cell">${server.memory}</span>
          <span class="profile-link">${server.serverProfile || ""}${server.profileWarning ? warningIcon() : ""}</span>
          <span class="truncate">${server.firmware}</span>
          <span>${server.advisory}</span>
          <span>${server.licenseTier}</span>
          <span>${server.operational === "Active" ? `<span class="status-pill active">${hclIcon("healthy")}Active</span>` : "N/A"}</span>
          <span class="number-cell">${server.cpu}</span>
          <span><span class="hcl-chip ${server.hclLevel}">${hclIcon(server.hclLevel)}${server.hclStatus}</span></span>
          <span class="row-actions">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" /></svg>
          </span>
        </button>`;
    })
    .join("");

  table.innerHTML = header + (body || `<div class="empty-row">No servers match the current view.</div>`);
  table.querySelectorAll(".server-row[data-id]").forEach((row) => {
    row.addEventListener("click", () => selectServer(row.dataset.id, true));
  });
}

function updateWidgets() {
  document.querySelector(".health-donut").style.background =
    "conic-gradient(var(--red) 0 18%, var(--warning) 18% 27%, var(--green) 27% 100%)";
}

function getServer(id) {
  return servers.find((server) => server.id === id);
}

function selectServer(id, openDrawer = false) {
  const server = getServer(id);
  if (!server) return;
  state.selectedId = id;
  renderTable();
  updateMapSelection();
  if (openDrawer) {
    openDetails(server);
  }
}

function updateMapSelection() {
  document.querySelectorAll(".pin-marker").forEach((marker) => {
    marker.classList.toggle("selected", marker.dataset.server === state.selectedId);
  });
}

function openDetails(server) {
  drawer.hidden = false;
  drawerName.textContent = server.name;
  drawerPairs.innerHTML = [
    ["Health", server.health],
    ["Model", server.model],
    ["Contract Status", server.contractStatus],
    ["UCS Domain", server.ucsDomain || "N/A"],
    ["Memory", `${server.memory} GB`],
    ["Server Profile", server.serverProfile || "N/A"],
    ["Firmware Version", server.firmware],
    ["License Tier", server.licenseTier],
    ["CPU", server.cpu],
    ["HCL Status", server.hclStatus],
    ["Location", server.location],
    ["Power State", server.power],
    ["Serial", server.serial],
    ["Management IP", server.ip],
  ]
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
}

function render() {
  shell.classList.toggle("table-mode", state.mode === "table");
  shell.classList.toggle("split-mode", state.mode === "split");
  shell.classList.toggle("map-mode", state.mode === "map");
  mapCanvas.classList.toggle("cluster-expanded", state.clusterExpanded);
  document.querySelectorAll(".view-switcher button").forEach((button) => {
    const isActive = button.dataset.mode === state.mode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  setTableWidth(state.tableWidth);
  mapCanvas.style.setProperty("--map-scale", state.mapScale);
  mapCanvas.style.setProperty("--map-origin-x", `${state.mapOrigin.x}%`);
  mapCanvas.style.setProperty("--map-origin-y", `${state.mapOrigin.y}%`);
  setMarkerZoomPositions();
  overlayLabel.textContent = state.overlay;
  renderTable();
  updateWidgets();
  updateMapSelection();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  const rows = visibleServers();
  if (rows.length && !rows.some((server) => server.id === state.selectedId)) {
    state.selectedId = rows[0].id;
  }
  render();
});

filterToggle.addEventListener("click", () => {
  filterPanel.hidden = !filterPanel.hidden;
});

filterPanel.querySelectorAll("input[type='checkbox']").forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      state.filters.add(input.value);
    } else {
      state.filters.delete(input.value);
    }

    if (!state.filters.size) {
      state.filters.add(input.value);
      input.checked = true;
      showToast("At least one health filter must stay selected.");
    }

    const rows = visibleServers();
    if (rows.length && !rows.some((server) => server.id === state.selectedId)) {
      state.selectedId = rows[0].id;
    }
    render();
  });
});

document.querySelectorAll(".view-switcher button").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    render();
  });
});

overlayMenu.addEventListener("click", () => {
  overlayOptions.hidden = !overlayOptions.hidden;
});

overlayOptions.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    state.overlay = button.dataset.overlay;
    overlayOptions.hidden = true;
    showToast(`${state.overlay} overlay applied.`);
    render();
  });
});

document.querySelector("#map-zoom-in").addEventListener("click", () => {
  state.mapScale = Math.min(1.9, Number((state.mapScale + 0.18).toFixed(2)));
  render();
});

document.querySelector("#map-zoom-out").addEventListener("click", () => {
  state.mapScale = Math.max(1, Number((state.mapScale - 0.18).toFixed(2)));
  if (state.mapScale === 1) {
    state.mapOrigin = { x: 50, y: 50 };
    state.clusterExpanded = false;
  }
  render();
});

document.querySelector("#map-fit").addEventListener("click", () => {
  resetClusterZoom();
  render();
});

document.querySelector("#map-refresh").addEventListener("click", () => {
  showToast("Server map refreshed.");
});

document.querySelector("#cluster-marker").addEventListener("click", () => {
  expandClusterZoom();
  showToast("Showing 3 critical locations near Elizabeth.");
  render();
});

document.querySelectorAll(".pin-marker[data-server], .location-marker[data-server]").forEach((marker) => {
  marker.addEventListener("click", () => selectServer(marker.dataset.server, true));
});

document.querySelector("#drawer-close").addEventListener("click", () => {
  drawer.hidden = true;
});

exportButton.addEventListener("click", () => {
  const rows = visibleServers();
  const csv = [
    [
      "Name",
      "Model",
      "Contract Status",
      "Health",
      "UCS Domain",
      "Memory",
      "Server Profile",
      "Firmware Version",
      "Advisory",
      "License Tier",
      "Operational State",
      "CPU",
      "HCL Status",
      "Location",
      "Power",
      "Serial",
      "Management IP",
    ],
    ...rows.map((server) => [
      server.name,
      server.model,
      server.contractStatus,
      server.health,
      server.ucsDomain,
      server.memory,
      server.serverProfile,
      server.firmware,
      server.advisory,
      server.licenseTier,
      server.operational,
      server.cpu,
      server.hclStatus,
      server.location,
      server.power,
      server.serial,
      server.ip,
    ]),
  ]
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "intersight-servers.csv";
  link.click();
  URL.revokeObjectURL(url);
  showToast(`${rows.length} servers exported.`);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".map-select")) {
    overlayOptions.hidden = true;
  }
});

render();
