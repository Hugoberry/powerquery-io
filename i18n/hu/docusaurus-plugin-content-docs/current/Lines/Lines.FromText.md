---
title: Lines.FromText
---

# Lines.FromText


## Description

Átalakít egy szöveges értéket a sortöréseknél elválasztott szöveges értékekből álló listára. Ha az includeLineSeparators értéke igaz, a sortörés karakterek a szöveg részét képezik.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Átalakít egy szöveges értéket a sortöréseknél elválasztott szöveges értékekből álló listára. Ha az includeLineSeparators értéke igaz, a sortörés karakterek a szöveg részét képezik.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (alapértelmezett) Nincs szükség az idézési mód meghatározására.</li>            <li><code>QuoteStyle.Csv:</code> Az idézés a CSV formátumnak megfelelően történik. Az ilyen régiók dupla idézőjellel választhatók el egymástól. Egy adott régión belül egy pár dupla idézőjellel tüntethető fel egyetlen dupla idézőjel.</li>          </ul>        </div>    



## Category
Lines
