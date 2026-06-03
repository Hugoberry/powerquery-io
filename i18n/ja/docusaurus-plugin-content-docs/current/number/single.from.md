---
title: Single.From
---

# Single.From


指定された値から Single (単精度浮動小数点数) を作成します。


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

指定された `value` から単精度浮動小数点型の `number` 値を作成します。指定された `value` が `null` である場合、`Single.From` は `null` を返します。指定された `value` が単精度浮動小数点型の範囲内の `number` である場合、`value` が返され、それ以外の場合にはエラーが返されます。`value` がそれ以外の型である場合には、まずは `Number.FromText` を参照して `number` 値に変換されます。省略可能な `culture` を指定することもできます (例: "en-US")。


## Examples

### Example #1
`"1.5"` の Single `number` 値を取得します。
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
