---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Devuelve el inicio de la semana.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Devuelve el inicio de la semana que contiene <code>dateTime</code>.    <code>dateTime</code> debe ser un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Busque el inicio de la semana del martes 11 de octubre de 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Busque el inicio de la semana del martes 11 de octubre de 2011, usando el lunes como inicio de la semana.
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
