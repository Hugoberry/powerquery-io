---
title: Time.Minute
---

# Time.Minute


## Description

Vraća komponentu minuta.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Vraća komponentu minuta navedene vrednosti <code>time</code>, <code>datetime</code> ili <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Pronalaženje minuta u #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
