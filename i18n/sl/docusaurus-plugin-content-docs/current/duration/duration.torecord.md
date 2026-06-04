---
title: Duration.ToRecord
---

# Duration.ToRecord


Vrne zapis, ki vsebuje dele trajanja.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Vrne zapis, ki vsebuje dele vrednosti trajanja, `duration`.

-   `duration`: vrednost `duration`, iz katere se ustvari zapis.


## Examples

### Example #1
Pretvorite `#duration(2, 5, 55, 20)` v zapis delov, vključno z dnevi, urami, minutami in sekundami, če je ustrezno.
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
