import { useMemo } from "react";

import { getLangColor, projects } from "@/data/projects";

export function LanguageBar() {
  const langs = useMemo(() => {
    const counts = new Map<string, number>();

    for (const project of projects) {
      counts.set(project.lang, (counts.get(project.lang) ?? 0) + 1);
    }

    const total = projects.length;

    const entries = [...counts.entries()]
      .map(([lang, count]) => ({ lang, count, pct: (count / total) * 100 }))
      .sort((a, b) => b.count - a.count);

    return { entries, total };
  }, []);

  return (
    <div>
      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        {langs.entries.map(({ lang, count, pct }) => (
          <div
            key={lang}
            title={`${lang} · ${count} repos`}
            style={{
              width: `${pct}%`,
              backgroundColor: getLangColor(lang),
            }}
          />
        ))}
      </div>

      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {langs.entries.map(({ lang, count }) => (
          <li
            key={lang}
            className="flex items-center gap-1.5 text-xs text-text-muted"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: getLangColor(lang) }}
            />

            <span className="font-medium text-text-secondary">{lang}</span>

            <span>{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}