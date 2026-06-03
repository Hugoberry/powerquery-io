---
title: Time.ToRecord
---

# Time.ToRecord


Restituisce un record contenente le parti del valore di ora.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Restituisce un record contenente le parti del valore di ora specificato `time`.

-   `time`: valore `time` da cui deve essere calcolato il record delle parti.


## Examples

### Example #1
Converte il valore `#time(11, 56, 2)` in un record contenente i valori di ora.
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
