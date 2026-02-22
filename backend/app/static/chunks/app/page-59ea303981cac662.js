async function getNumbers() {
  try {
    const response = await fetch("/number/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении чисел:", error);
    return [];
  }
}
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const markNumbersAsUsed = async (numbers) => {
  const promises = numbers.map((value) =>
    fetch("/number/", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
      body: JSON.stringify({ value }),
    }).catch((e) => console.error("Ошибка при отметке числа", value, e)),
  );
  await Promise.all(promises);
};
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1284: (e, t, l) => {
      "use strict";
      l.d(t, { cn: () => r });
      var a = l(8147),
        n = l(3130);
      function r() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, n.QP)((0, a.$)(t));
      }
    },
    1962: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 5424));
    },
    4577: (e, t, l) => {
      "use strict";
      l.d(t, { p: () => r });
      var a = l(1863);
      l(2495);
      var n = l(1284);
      function r(e) {
        let { className: t, type: l, ...r } = e;
        return (0, a.jsx)("input", {
          type: l,
          "data-slot": "input",
          className: (0, n.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t,
          ),
          ...r,
        });
      }
    },
    5424: (e, t, l) => {
      "use strict";
      (l.r(t), l.d(t, { default: () => R }));
      var a = l(1863),
        n = l(2495),
        r = l(7186),
        s = l(9224),
        i = l(1284);
      let o = (0, s.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default: "bg-primary text-primary-foreground hover:bg-primary/90",
              destructive:
                "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
              "icon-sm": "size-8",
              "icon-lg": "size-10",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        },
      );
      function d(e) {
        let { className: t, variant: l, size: n, asChild: s = !1, ...d } = e,
          c = s ? r.DX : "button";
        return (0, a.jsx)(c, {
          "data-slot": "button",
          className: (0, i.cn)(o({ variant: l, size: n, className: t })),
          ...d,
        });
      }
      var c = l(4577),
        h = l(2315),
        g = l(3575);
      function u(e) {
        let { className: t, ...l } = e;
        return (0, a.jsx)(h.bL, {
          "data-slot": "checkbox",
          className: (0, i.cn)(
            "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            t,
          ),
          ...l,
          children: (0, a.jsx)(h.C1, {
            "data-slot": "checkbox-indicator",
            className:
              "flex items-center justify-center text-current transition-none",
            children: (0, a.jsx)(g.A, { className: "size-3.5" }),
          }),
        });
      }
      var x = l(405);
      function f(e) {
        let { className: t, ...l } = e;
        return (0, a.jsx)(x.b, {
          "data-slot": "label",
          className: (0, i.cn)(
            "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t,
          ),
          ...l,
        });
      }
      var p = l(5522),
        m = l(6460),
        b = l(8829),
        v = l(695),
        j = l(5589),
        y = l(9878),
        w = l(3467);
      function N(e) {
        let { ...t } = e;
        return (0, a.jsx)(y.bL, { "data-slot": "dialog", ...t });
      }
      function k(e) {
        let { ...t } = e;
        return (0, a.jsx)(y.ZL, { "data-slot": "dialog-portal", ...t });
      }
      function C(e) {
        let { className: t, ...l } = e;
        return (0, a.jsx)(y.hJ, {
          "data-slot": "dialog-overlay",
          className: (0, i.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t,
          ),
          ...l,
        });
      }
      function S(e) {
        let { className: t, children: l, showCloseButton: n = !0, ...r } = e;
        return (0, a.jsxs)(k, {
          "data-slot": "dialog-portal",
          children: [
            (0, a.jsx)(C, {}),
            (0, a.jsxs)(y.UC, {
              "data-slot": "dialog-content",
              className: (0, i.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                t,
              ),
              ...r,
              children: [
                l,
                n &&
                  (0, a.jsxs)(y.bm, {
                    "data-slot": "dialog-close",
                    className:
                      "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [
                      (0, a.jsx)(w.A, {}),
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function T(e) {
        let { className: t, ...l } = e;
        return (0, a.jsx)("div", {
          "data-slot": "dialog-header",
          className: (0, i.cn)(
            "flex flex-col gap-2 text-center sm:text-left",
            t,
          ),
          ...l,
        });
      }
      function z(e) {
        let { className: t, ...l } = e;
        return (0, a.jsx)(y.hE, {
          "data-slot": "dialog-title",
          className: (0, i.cn)("text-lg leading-none font-semibold", t),
          ...l,
        });
      }
      function I(e) {
        let { className: t, ...l } = e;
        return (0, a.jsx)(y.VY, {
          "data-slot": "dialog-description",
          className: (0, i.cn)("text-muted-foreground text-sm", t),
          ...l,
        });
      }
      var A = l(1655),
        M = l(2413);
      function R() {
        let [e, t] = (0, n.useState)("случайно выбраны"),
          [l, r] = (0, n.useState)(""),
          [s, i] = (0, n.useState)(""),
          [o, h] = (0, n.useState)(""),
          [g, x] = (0, n.useState)(""),
          [y, w] = (0, n.useState)(!1),
          [k, C] = (0, n.useState)(!1),
          [R, E] = (0, n.useState)(!0),
          [O, _] = (0, n.useState)([]),
          [D, P] = (0, n.useState)(new Set()),
          [U, F] = (0, n.useState)(""),
          [L, W] = (0, n.useState)(!1),
          [V, q] = (0, n.useState)(!1),
          [J, G] = (0, n.useState)(!1),
          [Z, B] = (0, n.useState)(!1),
          [H, K] = (0, n.useState)(!1),
          [Q, X] = (0, n.useState)(0),
          Y = (0, n.useRef)(null),
          $ = (0, n.useRef)(null),
          [ee, et] = (0, n.useState)({}),
          [el, ea] = (0, n.useState)("5.25vw");
        ((0, n.useEffect)(() => {
          let e = localStorage.getItem("lastVisit"),
            t = new Date().toISOString().split("T")[0];
          e !== t &&
            fetch("/api/track-visit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
            })
              .then(() => {
                localStorage.setItem("lastVisit", t);
              })
              .catch(() => {});
        }, []),
          (0, n.useEffect)(
            () => () => {
              $.current && clearTimeout($.current);
            },
            [],
          ),
          (0, n.useEffect)(() => {
            Y.current && O.length > 0 && (Y.current.scrollTop = 0);
          }, [O]),
          (0, n.useEffect)(() => {
            let e;
            if (!Y.current || 0 === O.length) return;
            let t = Y.current,
              l = getComputedStyle(t),
              a = Number.parseFloat(l.paddingLeft),
              n = Number.parseFloat(l.paddingRight),
              r = t.clientWidth - a - n,
              s =
                ((e =
                  window.innerWidth <= 560
                    ? O.length >= 5
                      ? 4
                      : O.length >= 3
                        ? 6
                        : 15
                    : O.length >= 42
                      ? 2.5
                      : O.length >= 30
                        ? 2.8
                        : O.length >= 21
                          ? 3.2
                          : O.length >= 4
                            ? 3.5
                            : 5.25) /
                  100) *
                window.innerWidth;
            ea("".concat(e, "vw"));
            let i = document.createElement("canvas").getContext("2d");
            if (i)
              if (
                ((i.font = "".concat(s, "px sans-serif")),
                O.map((e) => i.measureText(String(e)).width),
                O.length <= 2)
              )
                et({
                  display: "flex",
                  gap: "8vw",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                });
              else {
                let e = 0.004 * window.innerWidth;
                et({
                  display: "grid",
                  gridTemplateColumns: "repeat("
                    .concat(3, ", ")
                    .concat((r - 2 * e) / 3, "px)"),
                  gap: "".concat(0.4, "vw"),
                  justifyContent: "start",
                  justifyItems: "center",
                  margin: "0",
                });
              }
          }, [O]));
        let en = async (t) => {
            try {
              await fetch("/api/log-generation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  numbers: t,
                  settings: {
                    title: e,
                    min: l,
                    max: s,
                    count: o,
                    excludeNumbers: g,
                    noDuplicatesInRequest: y,
                    unique: k,
                    sort: R,
                  },
                }),
              });
            } catch (e) {}
          },
          er = async () => {
            K(!1);
            K(!1);
            const numbersFromBackend = await getNumbers();
            const count = Number.parseInt(o) || 1;
            const minVal = Number.parseInt(l) || 0;
            const maxVal = Number.parseInt(s) || 100;

            // ---- Предварительные вычисления для фильтрации (используются и для генерации) ----
            const excludeUser = new Set();
            if (g.trim()) {
              for (let part of g
                .split(",")
                .map((s) => s.trim())
                .filter((s) => s.length > 0)) {
                if (part.includes("-")) {
                  const [startStr, endStr] = part
                    .split("-")
                    .map((s) => s.trim());
                  const start = Number.parseInt(startStr);
                  const end = Number.parseInt(endStr);
                  if (!isNaN(start) && !isNaN(end) && start <= end) {
                    for (let i = start; i <= end; i++) excludeUser.add(i);
                  }
                } else {
                  const num = Number.parseInt(part);
                  if (!isNaN(num)) excludeUser.add(num);
                }
              }
            }
            const globalUsed = k ? D : new Set();
            // --------------------------------------------------------------------------------

            if (numbersFromBackend && numbersFromBackend.length > 0) {
              // 1. Отбираем только те числа с бэка, которые подходят по всем условиям
              const validBackendNumbers = numbersFromBackend.filter(
                (num) =>
                  num >= minVal &&
                  num <= maxVal &&
                  !excludeUser.has(num) &&
                  !globalUsed.has(num),
              );

              if (validBackendNumbers.length > 0) {
                // Берём первые count подходящих чисел (или сколько есть)
                const preNumbers = validBackendNumbers.slice(0, count);
                console.log("Взято из бэка (после фильтрации):", preNumbers);
                markNumbersAsUsed(preNumbers); // помечаем их как использованные

                let need = count - preNumbers.length;
                let generated = [];

                if (need > 0) {
                  // Множество запрещённых чисел для генерации остатка
                  let forbidden = new Set([...excludeUser, ...globalUsed]);
                  const noDuplicates = k || y;
                  if (noDuplicates) {
                    preNumbers.forEach((num) => forbidden.add(num)); // чтобы не генерировать те, что уже взяли
                  }

                  // Формируем пул доступных чисел
                  const pool = [];
                  for (let i = minVal; i <= maxVal; i++) {
                    if (!forbidden.has(i)) pool.push(i);
                  }

                  if (pool.length === 0) {
                    alert(
                      "Нет доступных чисел для генерации (все числа исключены или уже использованы)",
                    );
                    _(preNumbers);
                    const creationTime = new Date().toLocaleString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      timeZoneName: "short",
                    });
                    F("создано ".concat(creationTime));
                    await en(preNumbers);
                    return;
                  }

                  if (noDuplicates && need > pool.length) {
                    alert(
                      `Недостаточно уникальных чисел. Доступно только ${pool.length} чисел (с учётом всех исключений).`,
                    );
                    _(preNumbers);
                    const creationTime = new Date().toLocaleString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      timeZoneName: "short",
                    });
                    F("создано ".concat(creationTime));
                    await en(preNumbers);
                    return;
                  }

                  if (noDuplicates) {
                    const shuffled = [...pool];
                    for (let i = 0; i < need; i++) {
                      const randomIndex = Math.floor(
                        Math.random() * shuffled.length,
                      );
                      generated.push(shuffled[randomIndex]);
                      shuffled.splice(randomIndex, 1);
                    }
                  } else {
                    for (let i = 0; i < need; i++) {
                      const randomIndex = Math.floor(
                        Math.random() * pool.length,
                      );
                      generated.push(pool[randomIndex]);
                    }
                  }
                }

                let finalNumbers;
                if (R) {
                  const sortedPre = [...preNumbers].sort((a, b) => a - b);
                  const sortedGen = [...generated].sort((a, b) => a - b);
                  finalNumbers = [...sortedPre, ...sortedGen];
                } else {
                  finalNumbers = [...preNumbers, ...generated];
                }
                if (k) {
                  const newSet = new Set(D);
                  finalNumbers.forEach((num) => newSet.add(num));
                  P(newSet);
                }
                _(finalNumbers);

                const creationTime = new Date().toLocaleString("ru-RU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZoneName: "short",
                });
                F("создано ".concat(creationTime));
                await en(finalNumbers);

                return;
              }
            }
            let e = Number.parseInt(o) || 1,
              t = Number.parseInt(l) || 0,
              a = Number.parseInt(s) || 100;
            if (t > a)
              return void alert(
                "Минимальное число не может быть больше максимального",
              );
            try {
              await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              });
            } catch (e) {}
            try {
              let l = await fetch("/api/check-preset?count=".concat(e)),
                n = await l.json();
              if (n.hasPreset && n.numbers && Array.isArray(n.numbers)) {
                let l = n.numbers.slice(Q, Q + e);
                ((l = l.map((e) =>
                  e < t || e > a
                    ? Math.floor(Math.random() * (a - t + 1)) + t
                    : e,
                )),
                  k && (l = l.filter((e) => !D.has(e))));
                let r = [],
                  s = e - l.length;
                if (s > 0 && s > 0) {
                  let e = new Set();
                  if (g.trim())
                    for (let t of g
                      .split(",")
                      .map((e) => e.trim())
                      .filter((e) => e.length > 0))
                      if (t.includes("-")) {
                        let l = t.split("-").map((e) => e.trim());
                        if (2 === l.length) {
                          let t = Number.parseInt(l[0]),
                            a = Number.parseInt(l[1]);
                          if (!isNaN(t) && !isNaN(a) && t <= a)
                            for (let l = t; l <= a; l++) e.add(l);
                        }
                      } else {
                        let l = Number.parseInt(t);
                        isNaN(l) || e.add(l);
                      }
                  let n = new Set();
                  for (let r = t; r <= a; r++)
                    e.has(r) || (k && D.has(r)) || l.includes(r) || n.add(r);
                  if (0 === n.size && s > 0) {
                    if (0 === l.length)
                      return void alert("Нет доступных чисел после исключения");
                  } else {
                    let e = Array.from(n),
                      t = [];
                    if (k || y) {
                      let l = [...e];
                      for (let e = 0; e < s && 0 !== l.length; e++) {
                        let e = Math.floor(Math.random() * l.length);
                        (t.push(l[e]), l.splice(e, 1));
                      }
                    } else
                      for (let l = 0; l < s; l++) {
                        let l = Math.floor(Math.random() * e.length);
                        t.push(e[l]);
                      }
                    r = [...l, ...t];
                  }
                } else r = l;
                if (k) {
                  let e = new Set(D);
                  (r.forEach((t) => e.add(t)), P(e));
                }
                (R && r.sort((e, t) => e - t), _(r));
                let i = (n.usedCount || 0) + l.length;
                i >= n.numbers.length
                  ? (await fetch("/api/admin/presets", {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ ip: n.ip }),
                    }).catch(() => {}),
                    X(0))
                  : (await fetch("/api/admin/presets", {
                      method: "PATCH",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ ip: n.ip, usedCount: i }),
                    }).catch(() => {}),
                    X(Q + l.length));
                let o = new Date().toLocaleString("ru-RU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZoneName: "short",
                });
                (F("создано ".concat(o)), await en(r));
                return;
              }
            } catch (e) {}
            if (e > 300)
              return void alert("Максимальное количество чисел: 300");
            let n = new Set();

            if (g.trim())
              for (let e of g
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e.length > 0))
                if (e.includes("-")) {
                  let t = e.split("-").map((e) => e.trim());
                  if (2 === t.length) {
                    let e = Number.parseInt(t[0]),
                      l = Number.parseInt(t[1]);
                    if (!isNaN(e) && !isNaN(l) && e <= l)
                      for (let t = e; t <= l; t++) n.add(t);
                  }
                } else {
                  let t = Number.parseInt(e);
                  isNaN(t) || n.add(t);
                }
            let r = new Set();
            for (let e = t; e <= a; e++)
              n.has(e) || (k && D.has(e)) || r.add(e);
            if (0 === r.size) {
              (K(!0), _([]), alert("Нет доступных чисел после исключения"));
              return;
            }
            if (k && e > r.size) {
              if (0 === r.size) {
                (K(!0), _([]));
                return;
              }
              alert(
                "Недостаточно уникальных чисел. Доступно только ".concat(
                  r.size,
                  " уникальных чисел (с учётом ранее сгенерированных и исключённых)",
                ),
              );
              return;
            }
            let i = [],
              d = Array.from(r);
            if (k || y) {
              let t = [...d];
              for (let l = 0; l < e && 0 !== t.length; l++) {
                let e = Math.floor(Math.random() * t.length);
                (i.push(t[e]), t.splice(e, 1));
              }
            } else
              for (let t = 0; t < e; t++) {
                let e = Math.floor(Math.random() * d.length);
                i.push(d[e]);
              }
            if ((R && i.sort((e, t) => e - t), k)) {
              let e = new Set(D);
              (i.forEach((t) => e.add(t)), P(e));
            }
            _(i);
            let c = new Date().toLocaleString("ru-RU", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              timeZoneName: "short",
            });
            (F("создано ".concat(c)), await en(i));
          },
          es = async () => {
            if (0 !== O.length)
              try {
                let t = new M.Ay({
                    orientation: "portrait",
                    unit: "px",
                    format: "a4",
                  }),
                  l = t.internal.pageSize.getWidth(),
                  a = t.internal.pageSize.getHeight(),
                  n = Math.ceil(O.length / 15);
                for (let r = 1; r <= n; r++) {
                  let n = (r - 1) * 15,
                    s = n + 15,
                    i = O.slice(n, s),
                    o = document.createElement("canvas");
                  ((o.width = 2 * l), (o.height = 2 * a));
                  let d = o.getContext("2d");
                  if (!d) continue;
                  d.scale(2, 2);
                  let c = d.createRadialGradient(
                    l / 2,
                    a / 2,
                    0,
                    l / 2,
                    a / 2,
                    l,
                  );
                  (c.addColorStop(0, "#ffffff"),
                    c.addColorStop(0.2, "#e1f4f1"),
                    c.addColorStop(0.4, "#e2d3e7"),
                    c.addColorStop(0.6, "#ffe2e2"),
                    c.addColorStop(0.8, "#d6f7df"),
                    c.addColorStop(1, "#bcdffb"),
                    (d.fillStyle = c),
                    d.fillRect(0, 0, l, a),
                    (d.fillStyle = "#1f2937"),
                    (d.font = "600 24px sans-serif"),
                    (d.textAlign = "center"),
                    d.fillText(e, l / 2, 50),
                    (d.fillStyle = "#4b5563"),
                    (d.font = "300 14px sans-serif"),
                    d.fillText(U, l / 2, 75));
                  let h = a - 60 - 110,
                    g = l - 50 - 50;
                  if (1 === i.length)
                    ((d.fillStyle = "#111827"),
                      (d.font = "700 120px sans-serif"),
                      (d.textAlign = "center"),
                      (d.textBaseline = "middle"),
                      d.fillText(String(i[0]), l / 2, 110 + h / 2));
                  else {
                    let e = i.length <= 8,
                      t = Math.min(i.length, 12),
                      a = 36;
                    (i.length >= 95
                      ? (a = 14)
                      : i.length >= 90
                        ? (a = 15)
                        : i.length >= 80
                          ? (a = 17)
                          : i.length >= 70
                            ? (a = 19)
                            : i.length >= 60
                              ? (a = 21)
                              : i.length >= 50
                                ? (a = 24)
                                : i.length >= 40
                                  ? (a = 26)
                                  : i.length >= 30
                                    ? (a = 28)
                                    : i.length >= 20
                                      ? (a = 30)
                                      : i.length >= 10 && (a = 34),
                      (d.font = "500 ".concat(a, "px sans-serif")));
                    let n = i.map((e) => d.measureText(String(e)).width),
                      r = Math.max(...n),
                      s =
                        i.length >= 80
                          ? 10
                          : i.length >= 60
                            ? 12
                            : i.length >= 40
                              ? 14
                              : 18,
                      o = t;
                    for (; o > 1 && !(o * (r + 10) + (o - 1) * s <= g); ) o--;
                    let c = Math.ceil(i.length / o),
                      u = (g - (o - 1) * s) / o,
                      x = a + 12,
                      f = c * x + (c - 1) * s,
                      p = a,
                      m = x,
                      b = s;
                    if (f > h) {
                      let e = h / f;
                      ((m = (p = Math.floor(a * e * 0.92)) + 10),
                        (b = Math.max(8, Math.floor(s * e))),
                        (d.font = "500 ".concat(p, "px sans-serif")));
                    }
                    let v = o * u + (o - 1) * b,
                      j = c * m + (c - 1) * b,
                      y = e ? (l - v) / 2 : 50,
                      w = e ? 110 + (h - j) / 2 : 125;
                    ((d.fillStyle = "#111827"),
                      (d.textAlign = "center"),
                      (d.textBaseline = "middle"),
                      i.forEach((e, t) => {
                        let l = t % o,
                          a = Math.floor(t / o),
                          n = y + l * (u + b) + u / 2,
                          r = w + a * (m + b) + m / 2;
                        d.fillText(String(e), n, r);
                      }));
                  }
                  let u = o.toDataURL("image/png");
                  (r > 1 && t.addPage(), t.addImage(u, "PNG", 0, 0, l, a));
                }
                t.save(
                  "random-numbers-".concat(
                    new Date().toISOString().split("T")[0],
                    ".pdf",
                  ),
                );
              } catch (e) {
                (console.error("Failed to generate PDF:", e),
                  alert(
                    "Ошибка при создании PDF: ".concat(
                      e instanceof Error ? e.message : "Неизвестная ошибка",
                    ),
                  ));
              }
          },
          ei = (e) => {
            let t = "Случайные числа: ".concat(O.join(", ")),
              l = window.location.href,
              a = {
                vk: "https://vk.com/share.php?url="
                  .concat(encodeURIComponent(l), "&title=")
                  .concat(encodeURIComponent(t)),
                ok: "https://connect.ok.ru/offer?url="
                  .concat(encodeURIComponent(l), "&title=")
                  .concat(encodeURIComponent(t)),
                tg: "https://t.me/share/url?url="
                  .concat(encodeURIComponent(l), "&text=")
                  .concat(encodeURIComponent(t)),
                wa: "https://wa.me/?text=".concat(
                  encodeURIComponent(t + " " + l),
                ),
              };
            a[e] && window.open(a[e], "_blank");
          };
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen w-screen overflow-x-hidden bg-white font-sans",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-col lg:flex-row h-auto lg:h-screen w-full gap-4 lg:gap-6 p-4 lg:p-[2vw]",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "w-full lg:w-[65%] lg:flex-shrink-0 rounded-3xl lg:rounded-[40px] p-6 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-0",
                  style: {
                    background:
                      "radial-gradient(circle at center, #ffffff 0%, #e1f4f1 20%, #e2d3e7 40%, #ffe2e2 60%, #d6f7df 80%, #bcdffb 100%)",
                  },
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-xl lg:text-2xl font-semibold text-gray-800 mb-2 text-center",
                          children: e,
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-xs lg:text-sm text-gray-600 font-light text-center",
                          children: U,
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "flex-1 flex items-start justify-center overflow-hidden py-8 lg:py-0",
                      children: (0, a.jsx)("div", {
                        ref: Y,
                        "data-output-panel": !0,
                        className:
                          "w-full h-full overflow-y-auto px-[5%] py-[2.2vw]",
                        children: H
                          ? (0, a.jsx)("div", {
                              className:
                                "w-full h-full flex items-center justify-center",
                              children: (0, a.jsx)("div", {
                                className:
                                  "text-4xl lg:text-6xl font-medium text-gray-600 leading-none",
                                children: "Числа нет",
                              }),
                            })
                          : 0 === O.length
                            ? (0, a.jsx)("div", {
                                className:
                                  "w-full h-full flex items-center justify-center",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "text-7xl lg:text-[160px] font-bold text-gray-900 leading-none",
                                  children: "0",
                                }),
                              })
                            : 1 === O.length
                              ? (0, a.jsx)("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center",
                                  children: (0, a.jsx)("div", {
                                    className:
                                      "text-7xl lg:text-[160px] font-bold text-gray-900 leading-none",
                                    children: O[0],
                                  }),
                                })
                              : (0, a.jsx)("div", {
                                  className: "w-full ".concat(
                                    O.length <= 2
                                      ? "h-full flex items-center justify-center"
                                      : "py-4",
                                  ),
                                  children: (0, a.jsx)("div", {
                                    style: ee,
                                    children: O.map((e, t) =>
                                      (0, a.jsx)(
                                        "div",
                                        {
                                          className:
                                            "font-medium cursor-pointer transition-transform active:scale-95 text-center",
                                          style: { fontSize: el },
                                          onClick: () => {
                                            (navigator.clipboard.writeText(
                                              String(e),
                                            ),
                                              W(!0),
                                              $.current &&
                                                clearTimeout($.current),
                                              ($.current = setTimeout(() => {
                                                (W(!1), ($.current = null));
                                              }, 2e3)));
                                          },
                                          children: e,
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "text-sm lg:text-base text-gray-600 text-center font-light",
                          children:
                            "простой и точный генератор случайных чисел",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center justify-center gap-3",
                          children: [
                            (0, a.jsx)(A.default, {
                              src: "static/images/fav.svg",
                              alt: "рандомер.рф",
                              width: 32,
                              height: 32,
                              className: "w-6 h-6 lg:w-8 lg:h-8",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "text-base lg:text-lg font-normal text-gray-900",
                              children: "рандомер.рф",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "right-panel w-full lg:w-[35%] lg:flex-shrink-0 bg-white rounded-3xl lg:rounded-[40px] p-6 lg:p-8 overflow-y-auto",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "right-panel--head",
                      children: [
                        (0, a.jsx)(c.p, {
                          value: e,
                          onChange: (e) => t(e.target.value),
                          className:
                            "right-panel--head--title text-base lg:text-lg h-14 lg:h-16 rounded-full border-[1.5px] border-gray-900 px-6 font-light",
                          placeholder: "случайно выбраны",
                        }),
                        (0, a.jsxs)("div", {
                          className: "grid grid-cols-3 gap-3",
                          children: [
                            (0, a.jsx)(c.p, {
                              type: "number",
                              placeholder: "от",
                              value: l,
                              onChange: (e) => r(e.target.value),
                              className:
                                "h-14 lg:h-16 rounded-full border-[1.5px] border-gray-900 px-4 text-center font-light text-base lg:text-lg",
                            }),
                            (0, a.jsx)(c.p, {
                              type: "number",
                              placeholder: "до",
                              value: s,
                              onChange: (e) => i(e.target.value),
                              className:
                                "h-14 lg:h-16 rounded-full border-[1.5px] border-gray-900 px-4 text-center font-light text-base lg:text-lg",
                            }),
                            (0, a.jsx)(c.p, {
                              type: "number",
                              placeholder: "кол-во",
                              value: o,
                              onChange: (e) => h(e.target.value),
                              className:
                                "h-14 lg:h-16 rounded-full border-[1.5px] border-gray-900 px-4 text-center font-light text-base lg:text-lg",
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-sm lg:text-base text-gray-500 text-center font-light",
                          children: "числа до 1 млн. до 300 вариантов",
                        }),
                        (0, a.jsx)(c.p, {
                          placeholder: "Исключить числа, через -, ,",
                          value: g,
                          onChange: (e) => x(e.target.value),
                          className:
                            "h-14 lg:h-16 rounded-full border-[1.5px] border-gray-900 px-6 font-light text-base lg:text-lg",
                        }),
                        (0, a.jsxs)("div", {
                          className: "space-y-3",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center space-x-3 h-14 lg:h-16 px-6 rounded-full border-[1.5px] border-gray-200",
                              children: [
                                (0, a.jsx)(u, {
                                  id: "noDuplicatesInRequest",
                                  checked: y,
                                  onCheckedChange: (e) => w(e),
                                  className: "w-5 h-5 lg:w-6 lg:h-6",
                                }),
                                (0, a.jsx)(f, {
                                  htmlFor: "noDuplicatesInRequest",
                                  className:
                                    "cursor-pointer text-sm lg:text-base font-light",
                                  children: "исключить повторы",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center space-x-3 h-14 lg:h-16 px-6 rounded-full border-[1.5px] border-gray-200",
                              children: [
                                (0, a.jsx)(u, {
                                  id: "unique",
                                  checked: k,
                                  onCheckedChange: (e) => C(e),
                                  className: "w-5 h-5 lg:w-6 lg:h-6",
                                }),
                                (0, a.jsx)(f, {
                                  htmlFor: "unique",
                                  className:
                                    "cursor-pointer text-sm lg:text-base font-light",
                                  children:
                                    "без повторений, до последнего числа",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center space-x-3 h-14 lg:h-16 px-6 rounded-full border-[1.5px] border-gray-900 bg-white",
                              children: [
                                (0, a.jsx)(u, {
                                  id: "sort",
                                  checked: R,
                                  onCheckedChange: (e) => E(e),
                                  className: "w-5 h-5 lg:w-6 lg:h-6",
                                }),
                                (0, a.jsx)(f, {
                                  htmlFor: "sort",
                                  className:
                                    "cursor-pointer text-sm lg:text-base font-light",
                                  children: "сортировать по возрастанию",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, a.jsx)(d, {
                          onClick: er,
                          className:
                            "w-full h-32 lg:h-44 bg-[#00ff88] hover:bg-[#00e67a] text-black text-2xl lg:text-3xl font-light rounded-3xl lg:rounded-[32px] shadow-none",
                          children: "сгенерировать",
                        }),
                        (0, a.jsx)(d, {
                          onClick: () => {
                            (r(""),
                              i(""),
                              h(""),
                              x(""),
                              _([]),
                              F(""),
                              P(new Set()),
                              K(!1),
                              X(0));
                          },
                          className:
                            "w-full h-14 lg:h-16 bg-[#ff006e] hover:bg-[#e6006a] text-white text-base lg:text-lg font-light rounded-full shadow-none",
                          children: "сбросить",
                        }),
                        (0, a.jsxs)("div", {
                          className: "grid grid-cols-5 gap-2 lg:gap-3",
                          children: [
                            (0, a.jsx)(d, {
                              variant: "outline",
                              onClick: es,
                              disabled: 0 === O.length,
                              className:
                                "h-14 lg:h-16 rounded-3xl lg:rounded-[32px] border-[1.5px] border-gray-900 bg-white hover:bg-gray-50 flex items-center justify-center",
                              title: "скачать",
                              children: (0, a.jsx)(p.A, {
                                className: "w-5 h-5 lg:w-6 lg:h-6",
                              }),
                            }),
                            (0, a.jsx)(d, {
                              variant: "outline",
                              onClick: () => {
                                let e = O.join(", ");
                                (navigator.clipboard.writeText(e),
                                  W(!0),
                                  $.current && clearTimeout($.current),
                                  ($.current = setTimeout(() => {
                                    (W(!1), ($.current = null));
                                  }, 2e3)));
                              },
                              disabled: 0 === O.length,
                              className:
                                "h-14 lg:h-16 rounded-3xl lg:rounded-[32px] border-[1.5px] border-gray-900 bg-white hover:bg-gray-50 flex items-center justify-center",
                              title: "копировать",
                              children: (0, a.jsx)(m.A, {
                                className: "w-5 h-5 lg:w-6 lg:h-6",
                              }),
                            }),
                            (0, a.jsx)(d, {
                              variant: "outline",
                              onClick: () => G(!0),
                              className:
                                "h-14 lg:h-16 rounded-3xl lg:rounded-[32px] border-[1.5px] border-gray-900 bg-white hover:bg-gray-50 flex items-center justify-center",
                              title: "избранное",
                              children: (0, a.jsx)(b.A, {
                                className: "w-5 h-5 lg:w-6 lg:h-6",
                              }),
                            }),
                            (0, a.jsx)(d, {
                              variant: "outline",
                              onClick: () => q(!0),
                              disabled: 0 === O.length,
                              className:
                                "h-14 lg:h-16 rounded-3xl lg:rounded-[32px] border-[1.5px] border-gray-900 bg-white hover:bg-gray-50 flex items-center justify-center",
                              title: "поделиться",
                              children: (0, a.jsx)(v.A, {
                                className: "w-5 h-5 lg:w-6 lg:h-6",
                              }),
                            }),
                            (0, a.jsx)(d, {
                              variant: "outline",
                              onClick: () => B(!0),
                              className:
                                "h-14 lg:h-16 rounded-3xl lg:rounded-[32px] border-[1.5px] border-gray-900 bg-white hover:bg-gray-50 flex items-center justify-center",
                              title: "информация",
                              children: (0, a.jsx)(j.A, {
                                className: "w-5 h-5 lg:w-6 lg:h-6",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            L &&
              (0, a.jsx)("div", {
                className:
                  "fixed top-4 right-4 bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg shadow-lg z-50 text-sm lg:text-base",
                children: "Результат скопирован",
              }),
            (0, a.jsx)(N, {
              open: V,
              onOpenChange: q,
              children: (0, a.jsxs)(S, {
                children: [
                  (0, a.jsx)(T, {
                    children: (0, a.jsx)(z, { children: "Поделиться" }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-4 justify-center py-4",
                    children: [
                      (0, a.jsx)(d, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => ei("vk"),
                        className: "w-12 h-12",
                        title: "ВКонтакте",
                        children: "VK",
                      }),
                      (0, a.jsx)(d, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => ei("ok"),
                        className: "w-12 h-12",
                        title: "Одноклассники",
                        children: "OK",
                      }),
                      (0, a.jsx)(d, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => ei("tg"),
                        className: "w-12 h-12",
                        title: "Telegram",
                        children: "TG",
                      }),
                      (0, a.jsx)(d, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => ei("wa"),
                        className: "w-12 h-12",
                        title: "WhatsApp",
                        children: "WA",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(N, {
              open: J,
              onOpenChange: G,
              children: (0, a.jsxs)(S, {
                children: [
                  (0, a.jsxs)(T, {
                    children: [
                      (0, a.jsx)(z, { children: "Добавить в избранное" }),
                      (0, a.jsxs)(I, {
                        children: [
                          "Скопируйте ссылку на страницу и добавьте её в закладки или нажмите комбинацию ",
                          (0, a.jsx)("strong", { children: "CTRL+D" }),
                          " на клавиатуре",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, a.jsx)(c.p, { value: "рандомер.рф", readOnly: !0 }),
                      (0, a.jsx)(d, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => {
                          (navigator.clipboard.writeText(window.location.href),
                            W(!0),
                            $.current && clearTimeout($.current),
                            ($.current = setTimeout(() => {
                              (W(!1), ($.current = null));
                            }, 2e3)));
                        },
                        children: (0, a.jsx)(m.A, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(N, {
              open: Z,
              onOpenChange: B,
              children: (0, a.jsxs)(S, {
                className: "max-w-2xl max-h-[80vh] overflow-y-auto",
                children: [
                  (0, a.jsx)(T, {
                    children: (0, a.jsx)(z, { children: "Информация" }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-4 text-sm",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h3", {
                            className: "font-semibold mb-2",
                            children:
                              "Как работает рандомайзер чисел на этом сайте?",
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Наш онлайн рандомайзер чисел позволяет быстро и бесплатно сгенерировать случайное число в заданном диапазоне — от 1 до 10, от 1 до 100 или любой другой. Просто введите нужные границы и нажмите кнопку \xabСгенерировать\xbb.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h3", {
                            className: "font-semibold mb-2",
                            children: "Можно ли выбрать диапазон чисел?",
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Да, генератор случайных чисел работает с любым диапазоном, который вы задаёте вручную. Хотите сгенерировать случайное значение от 500 до 1000? Не проблема — наш рандомайзер с настройками диапазона справится с этим за секунду.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h3", {
                            className: "font-semibold mb-2",
                            children:
                              "Подходит ли это для розыгрышей и конкурсов?",
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Да, наш генератор чисел идеально подойдёт, если нужно выбрать случайное число для конкурса или разыграть приз. Это надёжный способ выбрать число случайным образом, без вмешательства человека.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h3", {
                            className: "font-semibold mb-2",
                            children: "Нужно ли что-то скачивать?",
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Нет. Наш генератор случайных значений работает полностью онлайн, без регистрации и без рекламы. Вы просто заходите на сайт — и пользуетесь.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h3", {
                            className: "font-semibold mb-2",
                            children: "Сколько чисел можно сгенерировать?",
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Сколько угодно. Хотите одно число, два, десять — наш рандомайзер работает без ограничений (до 300 чисел за раз).",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  (e) => {
    (e.O(0, [346, 635, 440, 699, 305, 961, 358], () => e((e.s = 1962))),
      (_N_E = e.O()));
  },
]);
