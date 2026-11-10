// Shared prompt UI: every place on the site that shows or copies a prompt uses promptBlock(),
// so visitors always get the same full-width "Copy prompt" button and the same collapsible
// "View prompt" box. Do not build a separate copy button or prompt box on a page; extend this file.
const PROMPT_UI_TEXT = {
    zh: { copy: '複製提示詞', copied: '已複製！', show: '查看提示詞' },
    en: { copy: 'Copy prompt', copied: 'Copied!', show: 'View prompt' }
};

// Copy text to the clipboard, with a fallback for browsers without the async clipboard API.
async function copyPromptText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) {}
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    area.remove();
    return ok;
}

// Returns the copy button + "View prompt" box for one prompt.
// options.lang: 'zh' | 'en'; options.color: button color (defaults to the site blue);
// options.label: name used in the button's aria-label, e.g. the assistant or prompt title.
function promptBlock(text, { lang = 'zh', color = '#2563eb', label = '' } = {}) {
    const t = PROMPT_UI_TEXT[lang];
    const wrap = document.createElement('div');
    wrap.className = 'prompt-block';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'w-full text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity';
    button.style.backgroundColor = color;
    button.textContent = t.copy;
    button.setAttribute('aria-label', label ? `${t.copy}: ${label}` : t.copy);
    button.addEventListener('click', async () => {
        if (!(await copyPromptText(text))) return;
        button.textContent = t.copied;
        setTimeout(() => { button.textContent = t.copy; }, 1500);
    });

    const details = document.createElement('details');
    details.className = 'mt-3 text-sm';
    const summary = document.createElement('summary');
    summary.className = 'cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-slate-300';
    summary.textContent = t.show;
    const pre = document.createElement('pre');
    pre.className = 'mt-2 p-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg whitespace-pre-wrap break-words font-sans text-xs leading-relaxed text-slate-600 dark:text-slate-400';
    // 〔placeholders〕 (replaced personal data) are highlighted; the copy button still copies the raw text.
    text.split(/(〔[^〕]*〕)/).forEach(part => {
        if (!part) return;
        if (/^〔/.test(part)) {
            const mark = document.createElement('span');
            mark.className = 'px-1 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 font-semibold';
            mark.textContent = part;
            pre.appendChild(mark);
        } else {
            pre.appendChild(document.createTextNode(part));
        }
    });
    details.append(summary, pre);

    wrap.append(button, details);
    return wrap;
}
