---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


在提供的输入内替换值。


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

使用 `new` 值替换原始 `value` 中的 `old` 值。可以在 `List.ReplaceValue` 和 `Table.ReplaceValue` 中使用此替换器函数。


## Examples

### Example #1
使用值 10 替换值 11。
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
