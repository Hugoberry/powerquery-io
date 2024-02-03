---
title: DateTime.Time
---

# DateTime.Time


## Description

Retorna a parte de hora do valor datetime especificado.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Retorna a parte de hora do valor datetime especificado, <code>dateTime</code>.


## Examples

### Example #1 
Localize o valor de hora #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
