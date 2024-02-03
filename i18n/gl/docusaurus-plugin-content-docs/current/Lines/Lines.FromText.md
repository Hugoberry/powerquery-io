---
title: Lines.FromText
---

# Lines.FromText


## Description

Converte un valor de texto nunha lista de valores de texto dividida por quebras de liña. Se includeLineSeparators é verdadeiro, os caracteres de quebra de liña inclúense no texto.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Converte un valor de texto nunha lista de valores de texto dividida por quebras de liña. Se includeLineSeparators é verdadeiro, os caracteres de quebra de liña inclúense no texto.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (valor predefinido) non é necesario un comportamento de comiñas.</li>            <li><code>QuoteStyle.Csv:</code> as comiñas as marca o CSV. Úsase un carácter de comiñas dobres para delimitar ditas rexións e un par de caracteres de comiñas dobres para indicar un único carácter de comiñas dobres nesta rexión. </li>          </ul>        </div>    



## Category
Lines
