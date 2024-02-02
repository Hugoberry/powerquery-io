---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Renvoie la fin du trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Renvoie la fin du trimestre qui contient <code>dateTime</code>. Les informations de fuseau horaire sont conservées.      <ul>      <li><code>dateTime</code> : une valeur <code>date</code>, <code>datetime</code>, ou <code>datetimezone</code> à partir de laquelle la fin du trimestre est calculée.</li>      </ul>


## Examples

### Example #1 
Recherchez la fin du trimestre du 10 octobre 2011, 08:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
