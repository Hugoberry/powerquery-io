---
title: Lines.FromText
---

# Lines.FromText


## Description

Converte um valor de texto numa lista de valores de texto divididos por quebras de linha. Se includeLineSeparators for verdadeiro, os carateres de quebra de linha são incluídos no texto.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Converte um valor de texto numa lista de valores de texto divididos por quebras de linhas. Se includeLineSeparators for verdadeiro, os carateres de quebra de linha são incluídos no texto.        <div>          <ul>            <li> <code>QuoteStyle.None:</code> (predefinição) Não é necessário nenhum comportamento de cotação.</li>            <li><code>QuoteStyle.Csv:</code>A cotação é efetuada por CSV. É utilizado um caráter de aspas duplas para demarcar essas regiões e um par de carateres de aspas duplas para indicar um único caráter de aspas duplas dentro de uma região. </li>          </ul>        </div>    



## Category
Lines
