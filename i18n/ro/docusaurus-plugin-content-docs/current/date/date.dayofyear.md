---
title: Date.DayOfYear
---

# Date.DayOfYear


Returnează un număr de la 1 la 366, care reprezintă ziua din an.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Returnează un număr ce reprezintă ziua din an din valoarea `date`, `datetime` sau `datetimezone` furnizată, `dateTime`.


## Examples

### Example #1
Ziua din an pentru 1 martie 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
