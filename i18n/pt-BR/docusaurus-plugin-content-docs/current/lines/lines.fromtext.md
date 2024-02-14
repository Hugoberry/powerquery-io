---
title: Lines.FromText
---

# Lines.FromText


Converte um valor de texto em uma lista de valores de texto divididos em quebras de linha. Se includeLineSeparators for true, os caracteres de quebra de linha serão incluídos no texto.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Converte um valor de texto para uma lista de valores de texto dividida em quebras de linha. Se includeLineSeparators for true, os caracteres de quebra de linha serão incluídos no texto.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (padrão) Nenhum comportamento entre aspas é necessário.</li>            <li><code>QuoteStyle.Csv:</code> As aspas estão de acordo com o Csv. Um caractere de aspas duplas é usado para limitar as regiões e um par de caracteres de aspas duplas é usado para indicar um único caractere de aspas duplas dentro dessa região. </li>          </ul>        </div>    



## Category
Lines
