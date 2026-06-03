---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Devolve um registo que contém as partes do valor datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Devolve um registo que contém as partes do valor datetime especificado, `dateTime`.

-   `dateTime`: um valor `datetime` a partir do qual o registo das partes correspondentes deverá ser calculado.


## Examples

### Example #1
Converter o valor `#datetime(2011, 12, 31, 11, 56, 2)` num registo que contém os valores Data e Hora.
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
