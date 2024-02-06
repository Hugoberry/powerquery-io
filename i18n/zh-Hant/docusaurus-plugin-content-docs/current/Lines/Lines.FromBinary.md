---
title: Lines.FromBinary
---

# Lines.FromBinary


將二進位值轉換成文字值清單 (於分行符號處分隔)。若是指定引號樣式，分行符號可能會出現在引號內。當 includeLineSeparators 為 True 時，分行符號字元會包含在文字中。


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

將二進位值轉換成文字值清單 (於分行符號處分隔)。若是指定引號樣式，分行符號可能會出現在引號內。當 includeLineSeparators 為 True 時，分行符號字元會包含在文字中。



## Category
Lines
