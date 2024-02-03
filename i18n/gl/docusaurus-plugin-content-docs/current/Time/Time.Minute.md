---
title: Time.Minute
---

# Time.Minute


## Description

Devolve o compoñente de minuto.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Devolve o compoñente de minuto do valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Buscar o minuto en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
