---
title: DateTime.Time
---

# DateTime.Time


## Description

Devolve a parte que corresponde à hora do valor datetime especificado.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Devolve a parte que corresponde à hora do valor datetime especificado, <code>dateTime</code>.


## Examples

### Example #1 
Encontrar o valor de hora de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
