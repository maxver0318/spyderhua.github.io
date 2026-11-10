// Prompts Joe gave Max, shown on site_design.html#prompts (newest first).
// Maintained by the site-prompts skill. Every prompt is sanitized before it lands here:
// personal data, URLs, card numbers, keys and tokens are replaced with 〔placeholders〕.
// `prompt` stays in the language it was written in; title, why and tags are bilingual.
const PROMPTS = [
    {
        id: 'interviewer-pitch',
        date: '2026-11-09',
        title: { zh: '建立給面試官看的動畫自我介紹頁', en: 'Build an animated self-introduction page for interviewers' },
        why: {
            zh: '先講清楚目標讀者（面試官）和目的（一眼抓住注意力）；看到第一版後再追加「要更視覺、有動畫，但不能跳 tone」，Max 就能在既有設計語言內大膽改版。',
            en: 'It names the reader (interviewers) and the goal (grab attention at a glance); after the first version, the follow-up asks for more visuals and animation without breaking the site’s tone, so Max can redesign boldly within the existing design language.'
        },
        tags: { zh: ['新頁面', '求職', '動畫', '改版'], en: ['new page', 'job search', 'animation', 'redesign'] },
        pr: 19,
        page: 'pitch.html',
        prompt: `〔我的網站網址〕
請幫我在這個自我介紹網站中的 專案展示 區域再新增一個 html
我的目標是用來求職的時候讓面試的人能夠馬上抓住他的吸引力來看我的自我介紹。

（追加）
我覺得這個做出來的東西，基本上也還是只是一個網頁而已，內容比較簡短。

我想要可以再抓住他們的眼光、抓住他們的注意力：可能比較強調視覺的部分，或者是可以給一些動畫。

不過做這個動畫的主題以及類型，也還是要符合這個網站的設計，不能夠太跳tone`
    },
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
    {
        id: 'site-design-page',
        date: '2026-11-05',
        title: { zh: '建立「AI 協作開發流程」介紹頁', en: 'Build the "AI-Assisted Workflow" page' },
        why: {
            zh: '指定放在哪裡（專案展示的卡片）、要講什麼（我怎麼透過 Max、Max 做了哪些事、怎麼做）以及呈現方式（流程圖），Max 就能把協作過程整理成一頁清楚的說明。',
            en: 'It says where it goes (a project card), what to cover (how I work through Max, what Max does and how) and how to show it (a flowchart), so Max can turn the collaboration into one clear page.'
        },
        tags: { zh: ['新頁面', '流程圖', 'AI 協作'], en: ['new page', 'flowchart', 'AI collaboration'] },
        pr: 9,
        page: 'site_design.html',
        prompt: `我想要在網站的專案展示裡面，新增一個叫做「網站設計」的卡片。

裡面主要是想向大家介紹我如何透過你，你做了哪些事情、怎麼做的，然後畫成流程圖，用一個 HTML 放在這個卡片裡面介紹。`
    },
    {
        id: 'ai-assistants',
        date: '2026-11-04',
        title: { zh: '建立 AI 小助理介紹頁與像素頭像', en: 'Build the AI assistants page with pixel-art avatars' },
        why: {
            zh: '說明這頁之後的用途（照著這些角色去養 Grok bot），Max 就會把每個助理的名字和個性寫得具體可用；頭像則要求「先給我看過」，確認風格後才放上網頁。',
            en: 'It explains what the page is for later (building Grok bots from these characters), so Max makes each assistant’s name and personality concrete; for the avatars it asks to "show me first", so the style is approved before it goes live.'
        },
        tags: { zh: ['新頁面', 'AI 團隊', '像素風', '先確認再上線'], en: ['new page', 'AI team', 'pixel art', 'review first'] },
        pr: 7,
        page: 'assistants.html',
        prompt: `想要在我自我介紹的網站上面（也就是剛剛的那個 repository 裡面）多一個分頁或區塊，介紹我所飼養的個人小助理，其中一個就是你。

另外，之後我可能會用 Grok bot 來養一群小助理。我希望在這個網站會有一個地方介紹你和這一群助理，他們也都會有自己的名字和獨特的個性。你可以幫我先建立這一頁嗎？之後我在用 Grok bot 的時候，就可以根據你建立的這些 agent 的獨特特色來建立。

做幾張屬於你自己的頭像和其他助理的頭像 像素風格 每個都要有特色 先給我看過 再放到介紹網頁中`
    },
];
