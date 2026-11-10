// Prompts Joe gave Max, shown on site_design.html#prompts (newest first).
// Maintained by the site-prompts skill. Every prompt is sanitized before it lands here:
// personal data, URLs, card numbers, keys and tokens are replaced with 〔placeholders〕.
// `prompt` stays in the language it was written in; title, why and tags are bilingual.
const PROMPTS = [
    {
        id: 'hokkaido-trip',
        date: '2026-11-09',
        title: { zh: '建立北海道賞雪行程頁', en: 'Build a Hokkaido snow-trip itinerary page' },
        why: {
            zh: '一次講清楚目的（出發前看、旅途中也能用）、時間限制和一定要去的祭典，Max 就能自己查日期與天氣、排出每天的行程。',
            en: 'It states the goal (read before the trip, use during it), the time window and the must-see festivals in one go, so Max can research dates and weather and plan each day on its own.'
        },
        tags: { zh: ['新頁面', '旅遊', '查資料'], en: ['new page', 'travel', 'research'] },
        pr: 17,
        page: 'hokkaido.html',
        prompt: `〔我的網站網址〕
幫我在專案展示裡面多建立一個北海道旅遊的 HTML。

我明年 2 月 9 號 10:20 的飛機到 14 號 15:00 的飛機 要到北海道去賞雪，希望你可以幫我整理一個網站，主要是用來介紹有哪些地方可以去，幫我安排一下行程，並介紹每一站的內容：除了旅遊前可以看，旅遊過程中也可以開著進行參考使用

1. 每天的時間規劃、會去什麼地方，以及那些地方的特色是什麼
2. 幫我找一些照片放進去
3. 查一下那一天的天氣、適合穿什麼樣的衣服，並建議我們要買什麼樣的裝備來進行賞雪
4. 行程中有可能會租車

5. 想要去參加 支笏湖冰濤祭 大通公園的雪季`
    },
];
