---
title: Time.Second
---

# Time.Second


## Description

Restituisce il componente secondo.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Restituisce il componente secondo del valore <code>time</code>, <code>datetime</code> o <code>datetimezone</code> specificato <code>dateTime</code>.


## Examples

### Example #1 
Trova il secondo valore da un valore datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
