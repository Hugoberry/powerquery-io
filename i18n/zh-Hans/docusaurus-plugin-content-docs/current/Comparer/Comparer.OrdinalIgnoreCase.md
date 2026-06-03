---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


返回使用 Ordinal 规则来比较值的不区分大小写的比较器函数。


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

返回不区分大小写的比较器函数，该函数使用序号规则比较提供的值 `x` 和 `y`。  
  
比较器函数接受两个参数，并根据第一个值是小于、等于还是大于第二个值返回 -1、0 或 1。


## Examples

### Example #1
使用不区分大小写的 Ordinal 规则，比较 "Abc" 和 "abc"。请注意，通过使用 `Comparer.Ordinal`，"Abc" 要小于 "abc"。
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
