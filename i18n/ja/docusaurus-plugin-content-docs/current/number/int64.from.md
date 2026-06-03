---
title: Int64.From
---

# Int64.From


指定された値から 64 ビットの整数を作成します。


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

指定された `value` から 64 ビット整数の `number` 値を返します。指定された `value` が `null` の場合、`Int64.From` は `null` を返します。指定された `value` が 64 ビット整数の範囲内の `number` で、小数部がない場合には、`value` が返されます。小数部がある場合には、指定されている端数処理モードで数値が端数処理されます。既定の端数処理モードは `RoundingMode.ToEven` です。`value` がそれ以外の種類の場合、まずは `Number.FromText` を参照して `number` 値に変換されます。利用可能な端数処理モードについては、`Number.Round` をご覧ください。省略可能な `culture` を指定することもできます (例: "en-US")。


## Examples

### Example #1
`number` 値が `"4"` の 64 ビットの整数を取得します。
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero` を使用して、`"4.5"` の 64 ビットの整数 `number` を取得します。
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
