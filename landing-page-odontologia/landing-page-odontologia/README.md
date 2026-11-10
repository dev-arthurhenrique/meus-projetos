# Landing page odontológica

Projeto estático em HTML5, CSS3 e JavaScript puro, com abordagem mobile first.

## Estrutura

- `index.html`: conteúdo semântico e estrutura da página.
- `css/style.css`: tokens visuais, componentes, estados e breakpoints.
- `js/script.js`: menu acessível, animações com Intersection Observer, ano automático e formulário para WhatsApp.

## Configuração obrigatória antes de publicar

1. Substitua `[NOME DA CLÍNICA]`, textos entre colchetes, endereço, horários, serviços e dados profissionais pelos dados confirmados pelo cliente.
2. Em `js/script.js`, altere `WHATSAPP_NUMBER` para `55` + DDD + número, somente dígitos. Exemplo fictício de formato: `5511999999999`. Não publique com o valor padrão.
3. Substitua `[LINK_DO_GOOGLE_MAPS]` por um link real do Google Maps.
4. Confirme que cada tratamento listado é realmente oferecido. Remova os cards que não se aplicam.
5. Troque as imagens de demonstração por fotografias autorizadas da clínica/equipe ou imagens licenciadas adequadas. Comprima em WebP/AVIF e ajuste os caminhos.
6. Atualize título, descrição e imagem social (Open Graph) quando houver identidade e conteúdo definitivos.

## Como testar

Abra `index.html` em um navegador ou rode um servidor local, por exemplo `python -m http.server 8000`, na pasta do projeto. Teste em larguras de 360 px, 768 px, 1024 px e 1440 px.

## Revisão técnica realizada

- HTML: estrutura semântica com `header`, `nav`, `main`, `section`, `form` e `footer`; labels associados aos campos; texto alternativo nas imagens; link para pular navegação.
- CSS: layout mobile first, grids adaptáveis, estados de foco visíveis e suporte a `prefers-reduced-motion`.
- JavaScript: seletores protegidos por verificações, menu com `aria-expanded`, fallback sem Intersection Observer, validação nativa e codificação segura da mensagem enviada ao WhatsApp.
- Links: âncoras internas presentes. O link externo do mapa é um placeholder intencional e precisa ser substituído.
- Formulário: não coleta nem armazena dados no site; apenas monta uma mensagem e abre `wa.me`. O número precisa ser configurado.
- Conteúdo: placeholders explícitos evitam apresentar dados fictícios como verdadeiros.

## Observações antes de produção

As imagens remotas e a fonte externa dependem de conexão e dos termos/licenças dos respectivos provedores. Para desempenho e controle, hospede imagens otimizadas localmente e considere hospedar as fontes. Adicione depoimentos apenas com texto real e autorização do paciente. Inclua política de privacidade se houver coleta de dados adicional ou ferramentas de rastreamento.
