---
title: Lines.FromBinary
---

# Lines.FromBinary


将二进制值转换成在换行符处拆分的文本值列表。如果指定的是引用样式，则引号内可能会出现换行符。如果 includeLineSeparators 为 true，则文本中可能会出现换行符。


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

将二进制值转换成在换行符处拆分的文本值列表。如果指定的是引用样式，则引号内可能会出现换行符。如果 includeLineSeparators 为 true，则文本中可能会出现换行符。



## Category
Lines
