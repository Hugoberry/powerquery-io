---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

İkili bir değeri, satır sonlarında bölünen bir metin değerleri listesine dönüştürür. Alıntı stili belirtilirse alıntıların içinde satır sonları görünebilir. includeLineSeparators true ise satır sonu karakterleri metne dahil edilir.


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

İkili bir değeri, satır sonlarında bölünen bir metin değerleri listesine dönüştürür. Alıntı stili belirtilirse alıntıların içinde satır sonları görünebilir. includeLineSeparators true ise satır sonu karakterleri metne dahil edilir.



## Category
Lines
