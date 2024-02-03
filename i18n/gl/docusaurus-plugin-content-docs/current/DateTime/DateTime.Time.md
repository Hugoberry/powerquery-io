---
title: DateTime.Time
---

# DateTime.Time


## Description

Devolve a parte de hora do valor de data e hora indicado.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Devolve a parte de hora do valor de data e hora indicado, <code>dateTime</code>.


## Examples

### Example #1 
Busque o valor de hora de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
