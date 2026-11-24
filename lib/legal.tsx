import fs from 'node:fs';
import path from 'node:path';
import type { ReactNode } from 'react';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function inline(s: string): ReactNode[] {
  return s.split(/(\*\*.+?\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}

export function loadLegal(file: string, upperCaseAsSmall = false) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', file), 'utf8').split('\n');
  const toc: { id: string; title: string }[] = [];
  const nodes: ReactNode[] = [];
  let list: string[] = [];
  const flush = (k: number) => {
    if (list.length) {
      nodes.push(
        <ul key={`ul-${k}`}>
          {list.map((li, i) => (
            <li key={i}>{inline(li)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  raw.forEach((line, k) => {
    if (!line.trim()) return;
    if (line.startsWith('## ')) {
      flush(k);
      const title = line.slice(3).trim();
      const id = slug(title);
      toc.push({ id, title });
      nodes.push(
        <h2 id={id} key={`h2-${k}`}>
          {title}
        </h2>,
      );
    } else if (line.startsWith('### ')) {
      flush(k);
      nodes.push(<h3 key={`h3-${k}`}>{inline(line.slice(4).trim())}</h3>);
    } else if (line.startsWith('- ')) {
      list.push(line.slice(2).trim());
    } else {
      flush(k);
      const small = upperCaseAsSmall && line === line.toUpperCase() && line.length > 60;
      nodes.push(
        <p key={`p-${k}`} className={small ? 'caps' : undefined}>
          {inline(line.trim())}
        </p>,
      );
    }
  });
  flush(raw.length);
  return { toc, nodes };
}
