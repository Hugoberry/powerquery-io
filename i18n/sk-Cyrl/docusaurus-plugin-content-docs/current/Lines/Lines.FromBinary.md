---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Konvertuje binárnu hodnotu na zoznam textových hodnôt rozdelených v zlomoch riadkov. Ak je zadaný štýl citácie, zlomy riadkov sa môžu zobrazovať v úvodzovkách. Ak má hodnota includeLineSeparators hodnotu True, znaky zlomov riadkov sú zahrnuté v texte.


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

Konvertuje binárnu hodnotu na zoznam textových hodnôt rozdelených v zlomoch riadkov. Ak je zadaný štýl citácie, zlomy riadkov sa môžu zobrazovať v úvodzovkách. Ak má hodnota includeLineSeparators hodnotu True, znaky zlomov riadkov sú zahrnuté v texte.



## Category
Lines
