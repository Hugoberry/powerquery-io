---
title: Time.ToRecord
---

# Time.ToRecord


Retorna um registro contendo as partes do valor Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Retorna um registro contendo as partes do valor Time especificado, `time`.

-   `time`: um valor `time` com base no qual o registro das partes será calculado.


## Examples

### Example #1
Converta o valor `#time(11, 56, 2)` em um registro contendo os valores Time.
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
