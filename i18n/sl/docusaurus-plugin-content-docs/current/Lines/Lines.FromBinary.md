---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Pretvori dvojiško vrednost v seznam besedilnih vrednosti, ločenih pri prelomih vrstic. Če je določen slog narekovajev, se lahko prelomi vrstic prikažejo v narekovajih. Če je vrednost &#34;includeLineSeparators&#34; enaka &#34;true&#34;, so znaki za prelom vrstic vključeni v besedilo.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Pretvori dvojiško vrednost v seznam besedilnih vrednosti, ločenih pri prelomih vrstic. Če je določen slog narekovajev, se lahko prelomi vrstic prikažejo v narekovajih. Če je vrednost "includeLineSeparators" enaka "true", so znaki za prelom vrstic vključeni v besedilo.



## Category
Lines
