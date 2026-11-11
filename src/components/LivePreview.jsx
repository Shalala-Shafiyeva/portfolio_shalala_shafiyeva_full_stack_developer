import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { asset } from "../utils/asset";

// «Виртуальный» размер экрана: сайт рендерится в нём, а потом масштабируется под ширину блока,
// поэтому в маленькой рамке виден настоящий десктопный (или мобильный) макет.
const DEVICES = {
  desktop: { w: 1280, h: 800 },
  mobile: { w: 390, h: 780 },
};

function Skeleton() {
  return (
    <div
      className="absolute inset-0 grid grid-cols-[1fr_2fr] gap-3 bg-paper p-4"
      aria-hidden="true"
    >
      <div className="space-y-2">
        <div className="h-5 w-2/3 rounded bg-front/30" />
        <div className="h-3 rounded bg-line" />
        <div className="h-3 w-5/6 rounded bg-line" />
        <div className="h-3 w-4/6 rounded bg-line" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className={`rounded ${i % 2 ? "bg-front/10" : "bg-front/15"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LivePreview({ project }) {
  const { t } = useLang();
  const [device, setDevice] = useState("desktop");
  const [started, setStarted] = useState(false);
  const [boxW, setBoxW] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    setBoxW(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) =>
      setBoxW(entry.contentRect.width),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const d = DEVICES[device];
  const mobile = device === "mobile";
  const outerW = mobile ? Math.min(boxW, 300) : boxW;
  const innerW = mobile ? outerW - 16 : outerW; // 16 = рамка телефона
  const scale = innerW > 0 ? innerW / d.w : 0;
  const innerH = Math.round(d.h * scale);
  const host = project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const poster = project.shots && project.shots[0];

  return (
    <div ref={boxRef} className="w-full">
      {project?.mobile && (
        <div
          className="mb-3 inline-flex rounded-lg border border-line bg-paper p-0.5 text-sm font-semibold"
          role="group"
        >
          {["desktop", "mobile"].map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setDevice(k)}
              aria-pressed={device === k}
              className={`rounded-md px-4 py-1.5 ${device === k ? "bg-ink text-onink" : "text-mute hover:text-ink"}`}
            >
              {t(`proj.${k}`)}
            </button>
          ))}
        </div>
      )}
      <div
        className={
          mobile
            ? "mx-auto rounded-[28px] border border-line bg-night p-2"
            : "overflow-hidden rounded-xl border border-line bg-surface"
        }
        style={outerW ? { width: outerW } : undefined}
      >
        {!mobile && (
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="ml-2 flex-1 truncate rounded bg-paper px-2 py-1 text-xs text-mute">
              {host}
            </span>
          </div>
        )}

        <div
          className={`relative overflow-hidden bg-paper ${mobile ? "rounded-[20px]" : ""}`}
          style={{ height: scale ? innerH : 320 }}
        >
          {started && scale > 0 ? (
            <iframe
              src={project.demo}
              title={project.name}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              className="absolute left-0 top-0 border-0 bg-white"
              style={{
                width: d.w,
                height: d.h,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            />
          ) : (
            <>
              {poster ? (
                <img
                  src={asset(poster)}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <Skeleton />
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-paper/50 p-4 text-center backdrop-blur-[1px]">
                <button
                  type="button"
                  onClick={() => setStarted(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-onink shadow-lg hover:opacity-90"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {t("proj.launch")}
                </button>
                <p className="text-xs text-mute">{t("proj.launchHint")}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <p className="mt-3 text-xs text-mute">
        {t("proj.blocked")}{" "}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-front underline underline-offset-2"
        >
          {host}
        </a>
      </p>
    </div>
  );
}
