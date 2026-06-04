---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


傳回不區分大小寫的比較子函數，該函數會使用序數規則來比較值。


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

傳回不區分大小寫的比較子函數，此函數會使用序數規則來比較提供的值 `x` 和 `y`。  
  
比較函數會接受兩個引數，並根據第一個值小於、等於或大於第二個值，來傳回 -1、0 或 1。


## Examples

### Example #1
使用不區分大小寫的序數規則來比較 "Abc" 和 "abc"。請注意，使用 `Comparer.Ordinal` 時，"Abc" 小於 "abc"。
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
