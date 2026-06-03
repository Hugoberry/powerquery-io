---
title: Decimal.From
---

# Decimal.From


指定された値から 10 進数を作成します。


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

指定された `value` から10 進型の `number` 値を返します。指定された `value` が `null` である場合、`Double.From` は `null` を返します。指定された `value` が 10 進型の範囲内の `number` である場合、`value` が返され、それ以外の場合にはエラーが返されます。`value` がそれ以外の型である場合には、まずは `Number.FromText` を参照して `number` 値に変換されます。省略可能な `culture` を指定することもできます (例: "en-US")。


## Examples

### Example #1
`"4.5"` の 10 進数の `number` 値を取得します。
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
