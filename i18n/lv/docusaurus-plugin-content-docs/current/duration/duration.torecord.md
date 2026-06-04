---
title: Duration.ToRecord
---

# Duration.ToRecord


Atgriež ierakstu, kurā ir ilguma daļas.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Atgriež ierakstu, kurā ir ilguma vērtības `duration` daļas.

-   `duration`: `duration` vērtība, no kuras tiek izveidots ieraksts.


## Examples

### Example #1
Pārveidojiet `#duration(2, 5, 55, 20)` par tā daļu ierakstu, ietverot dienas, stundas, minūtes un sekundes, ja piemērojams.
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
