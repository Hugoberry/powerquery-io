---
title: Binary.FromText
---

# Binary.FromText


テキスト形式のデータをバイナリにデコードします。


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

テキスト値 `text` をバイナリ (`number` のリスト) に変換した結果を返します。テキスト値で使用されているエンコードを示すために、`encoding` を指定することができます。 `encoding` には次の `BinaryEncoding` 値を使用できます。

-   `BinaryEncoding.Base64`: Base 64 エンコード
-   `BinaryEncoding.Hex`: 16 進数エンコード


## Examples

### Example #1
"1011" をバイナリにデコードします。
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
"1011" を 16 進数エンコードのバイナリにデコードします。
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
