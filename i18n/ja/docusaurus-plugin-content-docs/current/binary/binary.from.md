---
title: Binary.From
---

# Binary.From


指定された値からバイナリを作成します


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

指定された `value` から `binary` 値を返します。指定された `value` が `null` の場合、`Binary.From` は `null` を返します。 指定された `value` が `binary` の場合、`value` が返されます。次の型の値を `binary` 値に変換できます:

-   `text`: テキスト表記からの `binary` 値。詳細については `Binary.FromText` を参照してください。

`value` が他の型の場合、エラーが返されます。


## Examples

### Example #1
`"1011"` の `binary` 値を取得します。
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
