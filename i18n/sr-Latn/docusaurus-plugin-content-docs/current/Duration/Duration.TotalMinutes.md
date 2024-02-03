---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Vraća ukupan broj minuta koje ovo trajanje obuhvata.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Vraća ukupan broj minuta koje obuhvata <code>duration</code>.


## Examples

### Example #1 
Pronađite ukupan broj minuta koje obuhvata vrednost trajanja.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
