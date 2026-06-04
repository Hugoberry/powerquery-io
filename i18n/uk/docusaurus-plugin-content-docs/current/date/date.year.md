---
title: Date.Year
---

# Date.Year


Повертає компонент року.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Повертає компонент року заданого значення `datetime`, `dateTime`.


## Examples

### Example #1
Знайти рік у #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
