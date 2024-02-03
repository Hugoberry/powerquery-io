---
title: Lines.FromText
---

# Lines.FromText


## Description

Konvertuje textovú hodnotu na zoznam textových hodnôt rozdelených v zlomoch riadkov. Ak má hodnota includeLineSeparators hodnotu True, znaky zlomov riadkov sa zahrnú do textu.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Konvertuje textovú hodnotu na zoznam textových hodnôt rozdelených v zlomoch riadkov. Ak je hodnota includeLineSeparators nastavená na hodnotu True, do textu sa zahrnú znaky zlomu riadka.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (predvolené) Nevyžaduje sa žiadne správanie pri spracovaní úvodzoviek.</li>            <li><code>QuoteStyle.Csv:</code> Spracovávanie úvodzoviek sa vykonáva podľa Csv. Znak dvojitej úvodzovky sa používa na vymedzenie takýchto oblastí a dva znaky dvojitej úvodzovky sa používajú na označenie jedného znaku dvojitej úvodzovky v rámci takejto oblasti. </li>          </ul>        </div>    



## Category
Lines
