---
title: Time.Hour
---

# Time.Hour


## Description

Vraća komponentu sata.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Vraća komponentu sata navedene vrednosti <code>time</code>, <code>datetime</code> ili <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Pronalaženje sata u #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
