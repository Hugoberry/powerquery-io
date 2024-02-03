---
title: Lines.FromText
---

# Lines.FromText


## Description

Converteix un valor de text en una llista de valors de text dividits per salts de línia. Si includeLineSeparators té el valor true, els caràcters del salt de línia s&#39;inclouen al text.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Converteix un valor de text en una llista de valors de text dividits per salts de línia. Si includeLineSeparators té el valor true, els caràcters del salt de línia s'inclouen al text.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (per defecte) no es necessita cap comportament de cometes.</li>            <li><code>QuoteStyle.Csv:</code> cometes segons Csv. S'utilitza el caràcter de cometes dobles per delimitar aquestes regions i un parell de caràcters de cometes dobles per indicar un únic caràcter de cometes dobles dintre de la regió. </li>          </ul>        </div>    



## Category
Lines
