---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Retorna um registro contendo as partes do valor datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Retorna um registro contendo as partes do valor datetime especificado, `dateTime`.

-   `dateTime`: um valor `datetime` com base no qual o registro das partes será calculado.


## Examples

### Example #1
Converta o valor `#datetime(2011, 12, 31, 11, 56, 2)` em um registro contendo os valores Date e Time.
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
