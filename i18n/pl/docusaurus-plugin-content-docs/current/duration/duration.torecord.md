---
title: Duration.ToRecord
---

# Duration.ToRecord


Zwraca rekord zawierający części wartości typu duration.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Zwraca rekord zawierający części wartości typu duration (`duration`).

-   `duration`: wartość typu `duration`, na podstawie której tworzony jest rekord.


## Examples

### Example #1
Przekonwertuj wartość `#duration(2, 5, 55, 20)` na rekord składający się z części, w tym dni, godziny, minuty i sekundy, jeśli ma to zastosowanie.
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
