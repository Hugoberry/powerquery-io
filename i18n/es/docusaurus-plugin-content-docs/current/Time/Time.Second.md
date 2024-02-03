---
title: Time.Second
---

# Time.Second


## Description

Devuelve el componente de segundos.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Devuelve el componente de segundos del valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code> proporcionado, <code>dateTime</code>.


## Examples

### Example #1 
Buscar el valor de segundos en un valor datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
