// Self-check: node check.js index.html. Runs the page script with a stubbed DOM; tests share-link validation and name escaping.
const fs = require("fs"), assert = require("assert");
const src = fs.readFileSync(process.argv[2], "utf8").match(/<script>([\s\S]*)<\/script>/)[1];
function run(hash) {
  const app = { innerHTML: "" };
  const ctx = new Function("document", "location", "localStorage", "window", "atob", "btoa",
    src + "; return { S, esc, SCREENS, render, ACT, EVENTS, app: document.getElementById() };");
  return ctx({ getElementById: () => app, addEventListener() {} }, { hash, href: "x" + hash },
    { getItem: () => null, setItem() {} }, { scrollY: 0, scrollTo() {} },
    s => Buffer.from(s, "base64").toString("latin1"), s => Buffer.from(s, "latin1").toString("base64"));
}
const b64 = o => "#" + Buffer.from(JSON.stringify(o)).toString("base64");
// 1. bad IDs fall back, good ones kept, dupes removed, page renders
let r = run(b64({ scen: "mars", orbit: "nope", power: "x", structure: "vault", inst: ["cam", "zzz", "cam"], launch: "heavy" }));
assert.deepStrictEqual([r.S.screen, r.S.d.orbit, r.S.d.power, r.S.d.structure, r.S.d.launch, r.S.d.inst], ["design", "low", "solS", "vault", "heavy", ["cam"]]);
assert.ok(r.app.innerHTML.includes("Mission dashboard"));
// 2. junk hashes stay on home without crashing
for (const h of ["#garbage", b64({ scen: "__proto__" }), b64({ scen: "constructor" }), b64({ scen: "earth", inst: "cam" })]) { r = run(h); r.render(); }
// 3. names are escaped
r = run("");
r.S.team = 'A"><b>x'; r.S.players = 2; r.S.names[1] = "<i>";
r.S.screen = "setup"; r.render();
assert.ok(r.app.innerHTML.includes('value="A&#34;&#62;&#60;b&#62;x"') && !r.app.innerHTML.includes("<i>"));
// 4. picking a mission opens its briefing, which reflects that mission
for (const k of ["earth", "mars", "jupiter"]) {
  r = run(""); r.S.d = null; r.S.screen = "scen"; r.render();
  r.S.d = { scen: k }; r.S.screen = "brief"; r.render();
  assert.ok(r.app.innerHTML.includes("Your mission starts here.") && r.app.innerHTML.includes(`m-${k}`), k);
}
// 5. mission control: decide, see the outcome, continue through every event to the report
r = run("");
r.ACT.scen("mars"); r.S.d.inst = ["cam"]; // set up what ACT.launch does, without its liftoff timer
r.S.d.ev = { sci: 1, life: 1, cost: 0, log: [] }; r.S.events = r.EVENTS; r.S.ei = 0; r.S.out = null; r.S.screen = "ops";
for (let i = 0; i < r.S.events.length; i++) {
  r.render(); assert.ok(r.app.innerHTML.includes("Control your exploration.") && r.app.innerHTML.includes('data-act="choose"'));
  r.ACT.choose("a"); r.render(); assert.ok(r.app.innerHTML.includes("Decision logged") && r.app.innerHTML.includes(r.S.out));
  r.ACT.next();
}
assert.strictEqual(r.S.screen, "report"); assert.strictEqual(r.S.d.ev.log.length, r.S.events.length);
r.render(); assert.ok(/Mission report[\s\S]*(FULL SUCCESS|PARTIAL SUCCESS|MISSION FAILED)/.test(r.app.innerHTML) && r.app.innerHTML.includes(r.S.d.ev.log[0][1]));
console.log("all checks passed");
