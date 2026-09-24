# NeoLar — guia rápido

## Como funciona a pasta de imagens

Dentro da pasta `images/`, salve cada foto com **o mesmo número do produto**,
por exemplo:

```
images/1.jpg    -> Trio de Vasos Cachepot
images/7.jpg    -> Fechadura Eletrônica Smart Door
images/27.png   -> Espelho Redondo Lapidado
```

O site aceita `.jpg`, `.jpeg`, `.png` ou `.webp` — não precisa avisar qual
formato usou, ele tenta todos automaticamente. Se não achar nenhuma imagem
para aquele número, mostra um quadro cinza escrito "Imagem N" no lugar (assim
você percebe rápido o que ainda falta subir).

**Não precisa mexer em nenhum código** para trocar uma foto: é só substituir
o arquivo na pasta `images/` com o mesmo número e fazer o deploy de novo no
Netlify (arrastar a pasta atualizada ou dar `git push`, dependendo de como
você conectou o site).

## Como adicionar um produto novo

1. Abra `js/data.js`.
2. Copie uma linha existente e cole no fim da lista.
3. Troque o `id` para o próximo número livre (ex: 31).
4. Preencha `category` (`"eletronicos"` ou `"decoracao"`), `name`, `price` e
   `link`.
5. Salve a imagem em `images/31.jpg` (ou o número que usou).
6. Deploy de novo.

## Como trocar os 5 produtos em destaque (banner do topo)

No mesmo arquivo `js/data.js`, mude `featured: true` para os produtos que
você quer no banner e `featured: false` para os que devem sair. Pode ter
quantos quiser, mas o ideal são entre 4 e 6 para o banner não ficar longo
demais.

## Estrutura de arquivos

```
neolar/
├── index.html          -> página principal
├── css/style.css        -> visual do site
├── js/data.js           -> lista de produtos (edite aqui)
├── js/main.js           -> funcionamento do site (não precisa mexer)
├── images/              -> fotos dos produtos, numeradas
└── LEIA-ME.md            -> este guia
```

## Publicando no Netlify

1. Entre em [netlify.com](https://netlify.com) e crie uma conta (ou faça login).
2. Na tela inicial, arraste a pasta `neolar` inteira para a área de deploy
   manual ("Deploy manually" / "Drag and drop your site folder here").
3. Pronto — o Netlify já te dá um link tipo `neolar-123.netlify.app`.
4. Depois, se quiser um domínio próprio (ex: `neolar.com.br`), é em
   **Site settings > Domain management**.

Toda vez que você trocar uma imagem ou editar `data.js`, é só arrastar a
pasta atualizada de novo (ou, se conectar com o GitHub, basta dar
`git push` que o Netlify atualiza sozinho).
