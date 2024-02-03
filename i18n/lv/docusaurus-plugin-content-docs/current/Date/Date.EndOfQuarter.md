---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Atgriež ceturkšņa beigas.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Atgriež ceturkšņa beigas vērtībā, kas satur <code>dateTime</code>. Informācija par laika joslu tiek saglabāta.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, no kuras tiek aprēķinātas ceturkšņa beigas.</li>      </ul>


## Examples

### Example #1 
Atrodiet ceturkšņa beigas 2011. gada 10. oktobrim, plkst. 8.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
