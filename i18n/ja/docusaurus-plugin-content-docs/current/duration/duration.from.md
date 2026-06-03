---
title: Duration.From
---

# Duration.From


指定された値から期間を作成します。


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

指定された値から期間値を返します。

-   `value`: 期間の算出元となる値。指定された `value` が `null` の場合、この関数は `null` を返します。指定された `value` が `duration` の場合は、`value` が返されます。次の型の値は、`duration` 値に変換できます:
    -   `text`: テキスト表記の経過時間形式 (d.h:m:s) からの `duration` 値。詳細については、`Duration.FromText` を参照してください。
    -   `number`: `value` で表される整数と小数の日数に相当する `duration`。

`value` が他の型の場合は、エラーが返されます。


## Examples

### Example #1
`2.525` を `duration` 値に変換します。
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
テキスト値 `"2.05:55:20.34567"` を `duration` 値に変換します。
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
