---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

取代提供之輸入中的值。


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

以 <code>new</code> 值取代原始 <code>value</code> 中的 <code>old</code> 值。這個取代子函數可用於 <code>List.ReplaceValue</code> 和 <code>Table.ReplaceValue</code> 中。


## Examples

### Example #1 
以值 10 取代值 11。
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
