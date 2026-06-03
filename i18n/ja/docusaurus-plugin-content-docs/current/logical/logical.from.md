---
title: Logical.From
---

# Logical.From


指定された値から論理値を作成します。


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

指定された `value` から `logical` 値を返します。指定された `value` が `null` の場合、`Logical.From` は `null` を返します。指定された `value` が `logical` の場合、`value` が返されます。次の型の値を `logical` 値に変換できます:

-   `text`: テキスト値 `"true"` または `"false"` からの `logical` 値。詳細については `Logical.FromText` を参照してください。
-   `number`: `value` が `0` と等しい場合は `false`、それ以外の場合は `true`。

`value` が他の型の場合、エラーが返されます。


## Examples

### Example #1
`2` を `logical` 値に変換します。
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
