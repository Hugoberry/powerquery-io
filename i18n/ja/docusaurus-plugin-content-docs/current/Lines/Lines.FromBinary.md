---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

バイナリ値を、改行で分割されたテキスト値のリストに変換します。引用符のスタイルで指定すると、改行は引用符で囲まれて表示されることがあります。includeLineSeparators が true の場合、改行文字はテキストに含まれます。


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

バイナリ値を、改行で分割されたテキスト値のリストに変換します。引用符のスタイルで指定すると、改行は引用符で囲まれて表示されることがあります。includeLineSeparators が true の場合、改行文字はテキストに含まれます。



## Category
Lines
