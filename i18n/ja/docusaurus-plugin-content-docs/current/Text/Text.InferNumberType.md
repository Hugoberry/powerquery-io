---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

テキストでエンコードされた数値の粒度の数値型を推測します (Int64.Type、Double.Type など)。


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

<code>text</code> の粒度番号の種類 (Int64.Type、Double.Type など) を推測します。<code>text</code> が数値でない場合にエラーが発生します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。



## Category
Text
