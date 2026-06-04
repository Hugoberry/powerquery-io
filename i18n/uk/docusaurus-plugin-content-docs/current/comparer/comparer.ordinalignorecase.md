---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Повертає функцію засобу порівняння без урахування регістра, яка порівнює значення за порядковими правилами.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Повертає функцію засобу порівняння без урахування регістра, яка використовує порядкові правила для порівняння наданих значень "`x`" і "`y`".  
  
Функція засобу порівняння приймає два аргументи та повертає -1, 0 або 1 залежно від того, чи перше значення менше, дорівнює або більше за друге


## Examples

### Example #1
За порядковими правилами без урахування регістра порівняти значення "Abc" та "abc". Зверніть увагу, що за використання функції `Comparer.Ordinal` значення "Abc" менше за "abc".
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
