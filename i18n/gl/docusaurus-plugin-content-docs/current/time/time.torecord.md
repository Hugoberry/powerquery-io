---
title: Time.ToRecord
---

# Time.ToRecord


Devolve un rexistro que contén partes do valor de hora.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Devolve un rexistro que contén as partes do valor Time indicado, `time`.

-   `time`: un valor `time` a partir do que se debe calcular o rexistro das súas partes.


## Examples

### Example #1
Converter o valor `#time(11, 56, 2)` nun rexistro que contén os valores de hora.
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
