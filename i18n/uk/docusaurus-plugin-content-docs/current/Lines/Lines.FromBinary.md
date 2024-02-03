---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Перетворює двійкове значення на список текстових значень, розділених розривами рядків. Якщо вказано стиль цитування, розриви рядків можуть відображатися в лапках. Якщо параметр includeLineSeparators має значення true, символи розривів рядків включаються в текст.


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

Перетворює двійкове значення на список текстових значень, розділених розривами рядків. Якщо вказано стиль цитування, розриви рядків можуть відображатися в лапках. Якщо параметр includeLineSeparators має значення true, символи розривів рядків включаються в текст.



## Category
Lines
