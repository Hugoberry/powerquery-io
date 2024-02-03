---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Nahradí hodnoty v rámci uvedeného vstupu.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Nahradí hodnotu <code>old</code> v pôvodnom zázname <code>value</code> hodnotou <code>new</code>. Túto funkciu nahrádzača možno použiť v časti <code>List.ReplaceValue</code> a <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Nahraďte hodnotu 11 hodnotou 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
