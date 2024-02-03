---
title: Time.Hour
---

# Time.Hour


## Description

Vrátí komponentu hodin.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Vrátí komponentu hodin předané hodnoty <code>time</code>, <code>datetime</code> nebo <code>datetimezone</code> <code>dateTime</code>.


## Examples

### Example #1 
Vyhledá hodiny v hodnotě #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
