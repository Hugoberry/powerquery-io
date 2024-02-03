---
title: Lines.FromText
---

# Lines.FromText


## Description

Convierte un valor de texto en una lista de valores de texto dividida por saltos de línea. Si el valor de includeLineSeparators es true, los caracteres de saltos de línea se incluyen en el texto.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Convierte un valor de texto a una lista de valores de texto divididos por saltos de línea. Si el valor de includeLineSeparators es true, los caracteres de salto de línea se incluyen en el texto.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (valor predeterminado) no se necesita comportamiento de comillas.</li>            <li><code>QuoteStyle.Csv:</code> las comillas se determinan por Csv. Se usa un carácter de comillas dobles para delimitar esas regiones y dos caracteres de comillas dobles para indicar un único carácter de comillas dobles dentro de una región como esa. </li>          </ul>        </div>    



## Category
Lines
