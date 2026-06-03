---
title: Date.ToRecord
---

# Date.ToRecord


Zwraca rekord zawierający części wartości typu date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Zwraca rekord zawierający części danej wartości typu date (`date`).

-   `date`: wartość typu `date`, na podstawie części której jest tworzony rekord.


## Examples

### Example #1
Przekonwertuj wartość `#date(2011, 12, 31)` na rekord zawierający części z wartości typu date.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
