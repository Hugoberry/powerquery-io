---
title: Duration.ToRecord
---

# Duration.ToRecord


Restituisce un record contenente le parti della durata.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Restituisce un record contenente le parti del valore della durata `duration`.

-   `duration`: elemento `duration` da cui viene creato il record.


## Examples

### Example #1
Converte `#duration(2, 5, 55, 20)` in record composto dalle relative parti, tra cui giorni, ore, minuti e secondi, se applicabile.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
