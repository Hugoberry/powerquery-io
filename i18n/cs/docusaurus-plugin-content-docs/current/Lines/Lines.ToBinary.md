---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Převede seznam textových hodnot na binární hodnoty pomocí určeného kódování a hodnoty lineSeparator. Ke každému řádku je připojena zadaná hodnota lineSeparator. Pokud není tato hodnota určena, jsou použity znaky návratu na začátek řádku a odřádkování.


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

Převede seznam textových hodnot na binární hodnoty pomocí určeného kódování a hodnoty lineSeparator. Ke každému řádku je připojena zadaná hodnota lineSeparator. Pokud není tato hodnota určena, jsou použity znaky návratu na začátek řádku a odřádkování.



## Category
Lines
