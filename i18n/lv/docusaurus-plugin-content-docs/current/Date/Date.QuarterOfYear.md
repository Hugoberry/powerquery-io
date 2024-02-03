---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Atgriež skaitli, kas norāda, kurā gada ceturksnī šis datums iekrīt.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Atgriež skaitli no 1 līdz 4, kas norāda, kurā gada ceturksnī iekrīt datums <code>dateTime</code>. <code>dateTime</code> var būt <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība.


## Examples

### Example #1 
Atrodiet, kurā gada ceturksnī iekrīt datums #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
