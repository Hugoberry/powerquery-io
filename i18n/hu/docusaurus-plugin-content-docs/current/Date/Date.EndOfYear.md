---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Az év végét adja vissza.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

A következőt tartalmazó év végét adja vissza a tört másodpercekkel együtt: <code>dateTime</code>. A rendszer megőrzi az időzónával kapcsolatos adatokat.      <ul>        <li><code>dateTime</code>: Egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyből az év végének a számítása történik.</li>      </ul>


## Examples

### Example #1 
A 2011. 05. 14., 17:00:00 által jelölt év végének megállapítása
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
A 2011. 05. 17., 17:00:00 -7:00 által jelölt év végének megállapítása
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
