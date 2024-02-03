---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Konvertuje zoznam textu na binárnu hodnotu pomocou zadaného kódovania a oddeľovača lineSeparator. Zadaný oddeľovač lineSeparator je pripojený ku každému riadku.  Ak nie je zadaný, použije sa koniec riadka a znaky posunu riadka.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Details

Konvertuje zoznam textu na binárnu hodnotu pomocou zadaného kódovania a oddeľovača lineSeparator. Zadaný oddeľovač lineSeparator je pripojený ku každému riadku.  Ak nie je zadaný, použije sa koniec riadka a znaky posunu riadka.



## Category
Lines
