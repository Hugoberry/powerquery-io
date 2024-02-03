---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Devuelve el inicio de la hora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Devuelve el inicio de la hora representado por <code>dateTime</code>.    <code>dateTime</code> debe ser un valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Buscar el inicio de la hora del 10 de octubre de 2011, 8:10:32 a.m.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
