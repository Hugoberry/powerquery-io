---
title: Lines.ToBinary
---

# Lines.ToBinary


使用指定的编码和 lineSeparator 将文本列表转换为二进制值。指定的 lineSeparator 追加到每行之后。 如果未指定，则使用回车和换行符。


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

使用指定的编码和 lineSeparator 将文本列表转换为二进制值。指定的 lineSeparator 追加到每行之后。 如果未指定，则使用回车和换行符。



## Category
Lines
