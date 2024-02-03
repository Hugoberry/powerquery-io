---
title: Time.Minute
---

# Time.Minute


## Description

Vrátí komponentu minut.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Vrátí komponentu minut předané hodnoty <code>time</code>, <code>datetime</code> nebo <code>datetimezone</code> <code>dateTime</code>.


## Examples

### Example #1 
Vyhledá minuty v hodnotě #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
