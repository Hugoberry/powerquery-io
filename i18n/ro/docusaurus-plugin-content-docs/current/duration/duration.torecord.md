---
title: Duration.ToRecord
---

# Duration.ToRecord


Returnează o înregistrare ce conţine părţile duratei.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Returnează o înregistrare care conține părți din valoarea durată, `duration`.

-   `duration`: o valoare `duration` de la care este creată înregistrarea.


## Examples

### Example #1
Convertiți `#duration(2, 5, 55, 20)` într-o înregistrare a părților, inclusiv zile, ore, minute și secunde dacă există.
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
