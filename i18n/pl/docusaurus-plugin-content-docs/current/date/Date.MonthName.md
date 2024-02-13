---
title: Date.MonthName
---

# Date.MonthName


Zwraca nazwę składnika miesiąca.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Zwraca składnik nazwy miesiąca dla podanej wartości <code>date</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Pobierz nazwę miesiąca.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
