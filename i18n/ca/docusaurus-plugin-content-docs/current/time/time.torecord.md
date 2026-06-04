---
title: Time.ToRecord
---

# Time.ToRecord


Retorna un registre que conté les parts del valor Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Retorna un registre que conté les parts del valor Time proporcionat, `time`.

-   `time`: valor `time` a partir del qual s'ha de calcular el registre de les seves parts.


## Examples

### Example #1
Converteix el valor `#time(11, 56, 2)` en un registre que conté els valors Time.
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
