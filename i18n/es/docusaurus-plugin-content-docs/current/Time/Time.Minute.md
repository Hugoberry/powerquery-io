---
title: Time.Minute
---

# Time.Minute


## Description

Devuelve el componente de minutos.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Devuelve el componente de minutos del valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code> proporcionado, <code>dateTime</code>.


## Examples

### Example #1 
Buscar los minutos en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
