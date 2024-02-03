---
title: Lines.FromText
---

# Lines.FromText


## Description

Převede textovou hodnotu na seznam textových hodnot rozdělených na koncích řádků. Pokud má parametr includeLineSeparators hodnotu True, jsou znaky konců řádků zahrnuté do textu.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Převede textovou hodnotu na seznam textových hodnot rozdělených na koncích řádků. Pokud má parametr includeLineSeparators hodnotu True, jsou znaky konců řádků zahrnuté do textu.        <div>          <ul>            <li><code>QuoteStyle.None:</code> Nejsou potřebné žádné uvozovky (výchozí).</li>            <li><code>QuoteStyle.Csv:</code> Uvozovky jsou jako v CSV. Pomocí znaku dvojité uvozovky se oddělují oblasti a pár znaků dvojité uvozovky označuje jeden znak dvojité uvozovky uvnitř oblasti. </li>          </ul>        </div>    



## Category
Lines
