---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Nahradí hodnoty v zadaném vstupu.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Nahradí hodnotu <code>old</code> v původním záznamu <code>value</code> hodnotou <code>new</code>. Tento nahrazovač lze použít u hodnot <code>List.ReplaceValue</code> a <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Nahradí hodnotu 11 hodnotou 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
