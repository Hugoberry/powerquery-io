---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Повертає функцію засобу порівняння, яка порівнює значення за правилами для порядкових значень.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Повертає функцію засобу порівняння, яка використовує порядкові правила для порівняння наданих значень "`x`" і "`y`".  
  
Функція засобу порівняння приймає два аргументи та повертає -1, 0 або 1 залежно від того, чи перше значення менше, дорівнює або більше за друге.


## Examples

### Example #1
За допомогою правил для порядкових значень порівняйте, чи значення "encyclopædia" та "encyclopaedia" еквівалентні. Зверніть увагу, що вони еквівалентні, якщо використовується функція `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
