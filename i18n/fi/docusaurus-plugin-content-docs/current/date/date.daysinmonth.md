---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Palauttaa kuukauden päivien määrää ilmaisevan luvun 28–31


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Palauttaa kuukauden päivien määrän `date`\-, `datetime`\- tai `datetimezone`\-arvossa `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- tai `datetimezone`\-arvo, jonka kuukauden päivien määrä palautetaan.


## Examples

### Example #1
Joulukuun päivien määrä kohteen `#date(2011, 12, 01)` edustamana.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
