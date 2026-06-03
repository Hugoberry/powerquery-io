---
title: Percentage.From
---

# Percentage.From


指定された値からパーセント値を返します。


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

指定された `value` から `percentage` 値を返します。指定された `value` が `null` である場合、`Percentage.From` は `null` を返します。 指定された `value` が、後続するパーセント記号のある `text` である場合、変換された 10 進数が返されます。それ以外の場合、値は `Number.From` を使って `number` に変換されます。省略可能な `culture` を指定することもできます (例: "en-US")。


## Examples

### Example #1
`"12.3%"` の `percentage` 値を取得します。
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
