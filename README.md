Padaria Artesanal

Projeto acadêmico – Desenvolvimento Web

👥 Integrantes

David Soares – Desenvolvimento Front-end e Estrutura de Componentes

Arthur Candido – Design, Conteúdo e Arquitetura do Site

📝 Descrição do Negócio

A Padaria Artesanal é um negócio fictício inspirado em estabelecimentos que produzem pães, bolos e confeitaria utilizando técnicas tradicionais, ingredientes naturais e um atendimento acolhedor.

O site foi criado para representar essa marca digitalmente, permitindo que o usuário conheça os produtos, horários, serviços e canais de contato.

🎯 Objetivos do Site

Apresentar a identidade da padaria (história, valores e especialidades).

Exibir produtos e categorias de forma organizada e visualmente atrativa.

Facilitar o contato do cliente por WhatsApp ou formulário.

Permitir localização rápida via Google Maps integrado.

Garantir acessibilidade e responsividade para diferentes dispositivos.

📁 Estrutura de Pastas
padaria-artesanal/
│
├── index.html
├── produtos.html
├── contato.html
│
├── /css
│   ├── style.css
│   ├── responsivo.css
│   
│
├── /js
│   ├── javascript.js
│   
│
├── /assets
│   ├── /img
│   │   ├── banners/
│   │   ├── produtos/
│   │   └── icones/
│   
│


🔧 Melhorias Implementadas na Parte 2
✔️ 
 1. Ajustes de Acessibilidade

Adicionados textos alternativos em todas as imagens.

Ajuste de contraste entre fundo e texto.

Inclusão de roles ARIA nos principais elementos.

Navegação funcional via teclado (tabulação).

Botão de "Aumentar Fonte" no topo.

Resultado: site mais inclusivo e aderente às diretrizes WCAG.

  2. Ajustes de Responsividade

Grid flexível para cards e seções.

Menus adaptados para versões mobile (hambúrguer menu).

Redimensionamento automático de imagens.

Correções de quebra de layout em telas pequenas.

Resultado: navegação fluida em celular, tablet e desktop.

 3. Integrações Externas Adicionadas

Google Maps Embed – localização da padaria.

Link direto para WhatsApp – contato rápido.

Formulário funcional com validação em JavaScript.

🛠️ Justificativas Técnicas

Modularização permite que o código cresça sem virar um sistema difícil de manter.

Frameworks e componentes reutilizáveis reduzem o retrabalho.

Responsividade é essencial para melhorar experiência e ranqueamento SEO.

Acessibilidade torna o site inclusivo e alinhado às melhores práticas.

Integrações externas deixam o site mais útil, moderno e conectado com o usuário.

 Desafios Encontrados e Soluções
1. Quebra de layout em telas pequenas

Solução: revisão do CSS responsivo, reorganização em colunas e uso de Flexbox e media queries.

2. Padronização entre páginas diferentes

Solução: criação de componentes (header/footer).

3. Acessibilidade insuficiente na primeira versão

Solução: testes com navegação por teclado, ajustes de contraste e melhoria nas descrições.

4. Integração do mapa

Solução: adaptação do iframe do Google Maps com container responsivo.

🚀 Próximos Passos Planejados

Implementação de um carrinho de compras simples.

Versão com sistema de login cliente/administrador.

Painel para cadastrar novos produtos.

Otimização SEO avançada (rich snippets, meta tags dinâmicas).

Hospedagem online com domínio próprio.