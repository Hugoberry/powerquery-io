---
title: Time.ToRecord
---

# Time.ToRecord


Zwraca rekord zawierający części wartości typu time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Zwraca rekord zawierający części danej wartości typu time (`time`).

-   `time`: wartość typu `time`, na podstawie części której jest tworzony rekord.


## Examples

### Example #1
Przekonwertuj wartość `#time(11, 56, 2)` na rekord zawierający wartości godziny.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
