---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Преобразует двоичное значение в список текстовых значений, разделенных разрывами строк. Если указан стиль кавычек, разрывы строк могут отображаться между кавычками. Если значение includeLineSeparators равно true, то символы разрыва строк включаются в текст.


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

Преобразует двоичное значение в список текстовых значений, разделенных разрывами строк. Если указан стиль кавычек, разрывы строк могут отображаться между кавычками. Если значение includeLineSeparators равно true, то символы разрыва строк включаются в текст.



## Category
Lines
