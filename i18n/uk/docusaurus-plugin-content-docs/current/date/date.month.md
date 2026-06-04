---
title: Date.Month
---

# Date.Month


Повертає компонент місяця.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Повертає компонент місяця заданого значення `datetime`, `dateTime`.


## Examples

### Example #1
Знайти місяць у #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
