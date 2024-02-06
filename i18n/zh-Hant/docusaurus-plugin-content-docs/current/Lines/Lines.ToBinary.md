---
title: Lines.ToBinary
---

# Lines.ToBinary


使用指定的編碼和 lineSeparator，將文字清單轉換成二進位值。指定的 lineSeparator 會附加至每一行。如果未指定，則使用歸位字元和換行字元。


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

使用指定的編碼和 lineSeparator，將文字清單轉換成二進位值。指定的 lineSeparator 會附加至每一行。如果未指定，則使用歸位字元和換行字元。



## Category
Lines
