---
title: Date.ToRecord
---

# Date.ToRecord


Returnează o înregistrare ce conţine părţi din valoarea pentru dată.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Returnează o înregistrare care conține părți din valoarea dată calendaristică furnizată, `date`.

-   `date`: o valoare `date` pentru care urmează să fie calculată înregistrarea părților sale.


## Examples

### Example #1
Convertiţi valoarea `#date(2011, 12, 31)` într-o înregistrare ce conţine părţi din valoarea date.
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
