---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Retorna un registre que conté les parts del valor datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Retorna un registre que conté les parts del valor datetime proporcionat, `dateTime`.

-   `dateTime`: valor `datetime` a partir del qual s'ha de calcular el registre de les seves parts.


## Examples

### Example #1
Converteix el valor `#datetime(2011, 12, 31, 11, 56, 2)` en un registre que conté els valors de data i hora.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
