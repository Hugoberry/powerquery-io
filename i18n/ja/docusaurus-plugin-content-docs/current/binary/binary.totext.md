---
title: Binary.ToText
---

# Binary.ToText


バイナリ データをテキスト形式にエンコードします。


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

数値のバイナリ リスト `binary` をテキスト値に変換した結果を返します。必要に応じて、生成されるテキスト値に使用されるエンコードを示すために、`encoding` を指定することができます。 `encoding` には次の `BinaryEncoding` 値を使用できます。

-   `BinaryEncoding.Base64`: Base 64 エンコード
-   `BinaryEncoding.Hex`: 16 進数エンコード



## Category
Binary
