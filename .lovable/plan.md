
Plano: remover o pixel antigo (`1614944979551076`) do `index.html`, mantendo apenas o novo (`4529677620612420`).

Alterações em `index.html`:
1. No bloco `<script>` do Meta Pixel no `<head>`: remover a linha `fbq('init', '1614944979551076');`. Manter apenas `fbq('init', '4529677620612420');` e o `fbq('track', 'PageView');`.
2. No `<body>`: remover o `<noscript>` com `tr?id=1614944979551076`. Manter apenas o `<noscript>` do pixel `4529677620612420`.

Nada mais é alterado — o restante do HTML (SEO, OG, Twitter, root, script do main.tsx) permanece igual.

Após a aplicação, o site deve ser republicado para que o Pixel Helper confirme que apenas o pixel novo está disparando.
