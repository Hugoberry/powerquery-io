---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Devolve o inicio da semana.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Devolve o inicio da semana que contén <code>dateTime</code>.      <code>dateTime</code> debe ser un valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Buscar o inicio da semana do martes, 11 de outubro de 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Buscar o inicio da semana do martes, 11 de outubro de 2011, usando o luns como o inicio da semana.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
