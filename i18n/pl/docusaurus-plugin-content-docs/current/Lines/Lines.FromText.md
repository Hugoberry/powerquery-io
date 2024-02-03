---
title: Lines.FromText
---

# Lines.FromText


## Description

Konwertuje wartość tekstową na listę wartości tekstowych podzielonych w miejscach podziału wiersza. Jeśli element includeLineSeparators ma wartość true, znaki podziału wiersza zostaną uwzględnione w tekście.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Konwertuje wartość tekstową na listę wartości tekstowych podzielonych w miejscach podziału wiersza. Jeśli element includeLineSeparators ma wartość true, znaki podziału wiersza zostaną uwzględnione w tekście.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (wartość domyślna) nie jest wymagane żadne działanie stosowania cudzysłowów.</li>            <li><code>QuoteStyle.Csv:</code> cudzysłowy są stosowane tak jak w pliku CSV. Podwójny cudzysłów służy do oddzielania tych regionów, a para podwójnych cudzysłowów służy do wskazania jednego podwójnego cudzysłowu w tym regionie. </li>          </ul>        </div>    



## Category
Lines
