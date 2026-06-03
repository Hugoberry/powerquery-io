---
title: Time.ToRecord
---

# Time.ToRecord


Devolve um registo que contém as partes do valor de Hora.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Devolve um registo que contém as partes do valor de Hora especificado, `time`.

-   `time`: um valor `time` a partir do qual o registo das partes correspondentes deverá ser calculado.


## Examples

### Example #1
Converter o valor `#time(11, 56, 2)` num registo que contém os valores de Hora.
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
