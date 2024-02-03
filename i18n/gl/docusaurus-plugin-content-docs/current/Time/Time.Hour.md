---
title: Time.Hour
---

# Time.Hour


## Description

Devolve o compoñente de hora.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Devolve o compoñente de hora do valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Buscar a hora en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
