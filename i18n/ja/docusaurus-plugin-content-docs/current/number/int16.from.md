---
title: Int16.From
---

# Int16.From


指定された値から 16 ビット整数を作成します。


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

指定された `value` から 16 ビット整数の `number` 値を返します。指定された `value` が `null` である場合、`Int16.From` は `null` を返します。 指定された `value` が 16 ビット整数の範囲内の `number` で、小数部がない場合には、`value` が返されます。小数部がある場合には、指定されている端数処理モードで数値が端数処理されます。既定の端数処理モードは `RoundingMode.ToEven` です。`value` がそれ以外の種類である場合には、`Number.FromText` を使用して、まずは `number` 値に変換されます。利用可能な端数処理モードについては、`Number.Round` をご覧ください。省略可能な `culture` を指定することもできます (例: "en-US")。


## Examples

### Example #1
`"4"` の 16 ビット整数 `number` 値を取得します。
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero` を使用して、`"4.5"` の 16 ビット整数 `number` 値を取得します。
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
