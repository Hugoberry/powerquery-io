---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Замінює значення у введених даних.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Замінює значення <code>old</code> у вихідному <code>value</code> на значення <code>new</code>. Ця функція заміни може використовуватися в <code>List.ReplaceValue</code> і <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Замінити значення 11 на значення 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
