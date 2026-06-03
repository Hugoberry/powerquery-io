---
title: Text.InferNumberType
---

# Text.InferNumberType


テキストでエンコードされた数値の粒度の数値型を推測します (Int64.Type、Double.Type など)。


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

`text` の粒度番号の種類 (Int64.Type、Double.Type など) を推測します。`text` が数値でない場合にエラーが発生します。省略可能な `culture` を指定することもできます (例: "en-US")。



## Category
Text
