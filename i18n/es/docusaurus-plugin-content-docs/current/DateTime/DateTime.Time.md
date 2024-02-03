---
title: DateTime.Time
---

# DateTime.Time


## Description

Devuelve la parte de hora del valor de fecha y hora dado.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Devuelve la parte de hora del valor de fecha y hora dado, <code>dateTime</code>.


## Examples

### Example #1 
Buscar el valor de hora de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
