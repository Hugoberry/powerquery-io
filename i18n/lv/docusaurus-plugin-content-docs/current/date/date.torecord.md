---
title: Date.ToRecord
---

# Date.ToRecord


Atgriež ierakstu, kurā ir datuma vērtības daļas.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Atgriež ierakstu, kurā ir daļas no norādītās datuma vērtības `date`.

-   `date`: `date` vērtība, no kuras tiek aprēķināts tās daļu ieraksts.


## Examples

### Example #1
Pārveidojiet vērtību `#date(2011, 12, 31)` par ierakstu, kas ietver daļas no datuma vērtības.
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
