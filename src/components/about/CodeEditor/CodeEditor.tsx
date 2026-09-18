import { useState } from "react";
import type { EditorLanguage } from "@/data/editor";
import { aboutProfile, editorFiles, getFilePreviews } from "@/data/editor";

type Token = { text: string; color: string };

const EMOJI_RE = /^(\p{Extended_Pictographic}\uFE0F?)/u;

function Dance({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) {
  const match = text.match(EMOJI_RE);

  if (!match) {
    return <>{text}</>;
  }

  const emoji = match[1];
  const rest = text.slice(emoji.length);

  return (
    <span className="inline-flex items-center gap-1">
      <span
        className="icon-dance shrink-0"
        style={{ animationDelay: `${delay}s` }}
      >
        {emoji}
      </span>

      {rest}
    </span>
  );
}

const COLOR: Record<EditorLanguage, Record<string, string>> = {
  typescript: {
    keyword: "#c792ea",
    string: "#89ddff",
    number: "#f78c6c",
    comment: "#7f848e",
    type: "#82aaff",
    plain: "#d4d4d8",
    heading: "#e06c75",
  },
  tsx: {
    keyword: "#c792ea",
    string: "#89ddff",
    number: "#f78c6c",
    comment: "#7f848e",
    type: "#82aaff",
    plain: "#d4d4d8",
    heading: "#e06c75",
  },
  markdown: {
    keyword: "#c792ea",
    string: "#89ddff",
    number: "#f78c6c",
    comment: "#7f848e",
    type: "#82aaff",
    plain: "#d4d4d8",
    heading: "#e06c75",
  },
};

const KEYWORDS = new Set([
  "export",
  "interface",
  "const",
  "import",
  "return",
  "from",
  "function",
  "new",
]);

function tokenize(line: string, language: EditorLanguage): Token[] {
  const colors = COLOR[language];
  const tokens: Token[] = [];
  const open: string[] = [];
  let i = 0;

  const flush = () => {
    if (open.length) {
      tokens.push({ text: open.join(""), color: colors.plain });
      open.length = 0;
    }
  };

  while (i < line.length) {
    const ch = line[i];

    // comentário
    if (ch === "/" && line[i + 1] === "/") {
      flush();
      tokens.push({ text: line.slice(i), color: colors.comment });
      break;
    }

    // heading markdown
    if (language === "markdown" && /^#{1,6}\s/.test(line)) {
      flush();
      tokens.push({ text: line.slice(0, line.indexOf(" ") + 1), color: colors.heading });
      tokens.push({ text: line.slice(line.indexOf(" ") + 1), color: "#FAFAFA" });
      break;
    }

    // string
    if (ch === '"') {
      flush();
      const end = line.indexOf('"', i + 1);
      tokens.push({
        text: line.slice(i, end === -1 ? line.length : end + 1),
        color: colors.string,
      });
      i = end === -1 ? line.length : end + 1;
      continue;
    }

    // palavra (keyword / tipo / plain)
    if (/[A-Za-z_$]/.test(ch)) {
      let j = i;
      while (j < line.length && /[A-Za-z0-9_$]/.test(line[j])) j++;
      const word = line.slice(i, j);

      flush();
      if (KEYWORDS.has(word)) {
        tokens.push({ text: word, color: colors.keyword });
      } else if (/^[A-Z]/.test(word)) {
        tokens.push({ text: word, color: colors.type });
      } else {
        open.push(word);
      }

      i = j;
      continue;
    }

    // número
    if (/\d/.test(ch)) {
      flush();
      let j = i;
      while (j < line.length && /\d/.test(line[j])) j++;
      tokens.push({ text: line.slice(i, j), color: colors.number });
      i = j;
      continue;
    }

    open.push(ch);
    i++;
  }

  flush();

  return tokens;
}

export function CodeEditor() {
  const [activeId, setActiveId] = useState(editorFiles[0].id);

  const active =
    editorFiles.find((file) => file.id === activeId) ?? editorFiles[0];

  const lines = active.content.split("\n");

  return (
    <div
      data-gsap="editor-panel"
      className="
        flex
        h-full
        w-full
        flex-col

        overflow-hidden
        rounded-[var(--radius-lg)]
        border
        border-[#7a1d1d]/40
        bg-[#2a0505]
      "
    >
      {/* Barra de abas */}
      <div
        data-gsap="editor-tabs"
        className="
          flex
          shrink-0
          items-end
          gap-0.5

          border-b
          border-[#7a1d1d]/30
          bg-black/20
          px-2
          pt-2
        "
      >
        {editorFiles.map((file) => {
          const isActive = file.id === activeId;

          return (
            <button
              key={file.id}
              type="button"
              onClick={() => setActiveId(file.id)}
              className={[
                "group",
                "flex",
                "max-w-[200px]",
                "items-center",
                "gap-2",
                "rounded-t-[6px]",
                "px-3",
                "py-2",
                "text-sm",
                "transition-colors",
                "duration-150",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-white/20",
                isActive
                  ? "bg-[#2a0505] text-text-primary shadow-[inset_0_2px_0_#7a1d1d]"
                  : "text-text-muted hover:bg-white/5",
              ].join(" ")}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: isActive ? "#7a1d1d" : "#7f848e" }}
              />

              <span className="truncate">{file.name}</span>

              <span
                className={[
                  "text-text-disabled",
                  isActive ? "opacity-40" : "opacity-0 group-hover:opacity-60",
                ].join(" ")}
              >
                ×
              </span>
            </button>
          );
        })}
      </div>

      {/* Editor — metade superior (código) */}
      <div className="flex min-h-0 flex-1 flex-col">
        <div
          data-gsap="editor-body"
          className="custom-scrollbar min-h-0 flex-1 overflow-y-auto bg-black/10 p-6"
        >
          <pre className="font-mono text-[13px] leading-6">
            {lines.map((line, index) => (
              <div
                key={`${active.id}-${index}`}
                className="
                  group
                  flex
                  w-full
                  items-center

                  transition-[background-color,box-shadow]
                  duration-200

                  hover:bg-[linear-gradient(to_right,rgba(122,29,29,0.16),rgba(122,29,29,0.04)_60%,transparent)]
                "
              >
                {/* Luz da linha */}
                <span className="flex w-6 shrink-0 items-center justify-center">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#e06c75]

                      opacity-0
                      shadow-[0_0_8px_2px_rgba(224,108,117,0.9)]

                      transition-opacity
                      duration-200

                      group-hover:opacity-100
                      group-hover:animate-pulse
                    "
                  />
                </span>

                <span
                  className={[
                    "mr-6",
                    "w-8",
                    "shrink-0",
                    "select-none",
                    "text-right",
                    "text-text-muted/50",
                    "transition-colors",
                    "duration-200",
                    "group-hover:text-[#e06c75]",
                  ].join(" ")}
                >
                  {index + 1}
                </span>

                <span className="whitespace-pre text-[#d4d4d8]">
                  {tokenize(line, active.language).map((token, i) => (
                    <span key={i} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </div>

        {/* Divisória */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-2

            border-y
            border-[#7a1d1d]/30
            bg-black/20
            px-4
            py-1.5
          "
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-text-muted">
            preview
          </span>

          <span className="h-px flex-1 bg-[#7a1d1d]/30" />
        </div>

        {/* Metade inferior (preview renderizado) */}
        <div
          data-gsap="editor-full-preview"
          className="custom-scrollbar min-h-0 flex-1 overflow-y-auto bg-[#1a0505]/40 p-6"
        >
          {active.language === "markdown" ? (
            <div className="flex flex-col gap-5">
              {lines.map((rawLine, index) => {
                const line = rawLine.replace(/- /g, "");
                if (!line.trim()) return null;
                const isH1 = rawLine.startsWith("# ") && !rawLine.startsWith("## ");
                const isH2 = rawLine.startsWith("## ");
                const isH3 = rawLine.startsWith("### ");
                const isBullet = rawLine.startsWith("- ");
                const isMeta = /^(?:(\p{Extended_Pictographic})\uFE0F? ?)?[a-z]+: /u.test(rawLine);
                const isQuote = rawLine.startsWith("> ");

                // primeira linha do documento → cabeçalho
                if (index === 0) {
                  return (
                    <h2
                      key={`${active.id}-${index}`}
                      className="
                        font-display
                        break-words
                        text-5xl
                        leading-tight
                        font-normal
                        tracking-tight
                        text-text-primary
                      "
                    >
                      {aboutProfile.name}
                    </h2>
                  );
                }

                return (
                  <div key={`${active.id}-${index}`}>
                    {isH1 && (
                      <h2 className="text-[26px] font-semibold tracking-tight text-text-primary">
                        <Dance text={rawLine.slice(2)} delay={0} />
                      </h2>
                    )}
                    {isH2 && (
                      <h3 className="flex items-center gap-3 pt-2 text-xs font-medium uppercase tracking-[0.24em] text-text-primary">
                        <span className="h-px w-6 bg-[#7a1d1d]/60" />

                        <span>
                          <Dance text={rawLine.slice(3)} delay={(index % 3) * 0.15} />
                        </span>
                      </h3>
                    )}
                    {isH3 && (
                      <p className="text-sm font-medium text-text-secondary">
                        <Dance text={rawLine.slice(4)} delay={(index % 4) * 0.1} />
                      </p>
                    )}
                    {isQuote && (
                      <div className="rounded-[var(--radius-sm)] border-l-2 border-[#7a1d1d] bg-[#7a1d1d]/15 px-4 py-3">
                        <p className="text-sm italic leading-relaxed text-text-primary">
                          {rawLine.slice(2)}
                        </p>
                      </div>
                    )}
                    {isBullet && (
                      <p className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-[3px] text-[11px] text-[#7a1d1d]">▸</span>

                        <span className="mt-[1px]">
                          <Dance text={line} delay={(index % 4) * 0.12} />
                        </span>
                      </p>
                    )}
                    {isMeta && (
                      <p className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="min-w-0 truncate">
                          <Dance
                            text={rawLine.slice(0, rawLine.indexOf(":"))}
                            delay={(index % 3) * 0.1}
                          />

                          <span className="text-[#82aaff]">:</span>

                          {rawLine.slice(rawLine.indexOf(":") + 1)}
                        </span>
                      </p>
                    )}
                    {!isH1 && !isH2 && !isH3 && !isBullet && !isMeta && !isQuote && (
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {line}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {getFilePreviews(active.id).map((section, sectionIndex) => (
                <div
                  key={section.title}
                  className={[
                    "rounded-[var(--radius-md)] border border-white/5 bg-black/20 p-4",
                    sectionIndex === 0 ? "border-[#7a1d1d]/30" : "",
                  ].join(" ")}
                >
                  <h3 className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.24em] text-text-primary">
                    <span>{section.title}</span>

                    <span className="text-text-muted">{section.items.length}</span>
                  </h3>

                  <div className="mt-2.5 flex flex-col gap-2">
                    {section.items.map((item, i) => (
                      <p
                        key={i}
                        className="flex items-center gap-2.5 border-l border-[#7a1d1d]/40 pl-3 font-mono text-[13px] leading-relaxed text-text-secondary"
                      >
                        <span className="text-[#82aaff]">➤</span>

                        <span>{item.replace(/^- /, "").replace(/^\+ /, "")}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Barra de status */}
      <div
        className="
          flex
          shrink-0
          items-center
          justify-between

          border-t
          border-[#7a1d1d]/30
          bg-black/20
          px-4
          py-1.5
          font-mono
          text-[11px]
          text-text-muted
        "
      >
        <span>ln {lines.length}, col 1</span>

        <span>
          {active.language.toUpperCase()} · UTF-8 · LF · Spaces: 2
        </span>
      </div>
    </div>
  );
}