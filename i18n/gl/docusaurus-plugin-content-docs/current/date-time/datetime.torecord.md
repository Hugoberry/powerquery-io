---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Devolve un rexistro que contén partes do valor de data e hora.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Devolve un rexistro que contén as partes do valor datetime indicado, `dateTime`.

-   `dateTime`: un valor `datetime` a partir do que se debe calcular o rexistro das súas partes.


## Examples

### Example #1
Converter o valor `#datetime(2011, 12, 31, 11, 56, 2)` nun rexistro que contén os valores de data e hora.
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
