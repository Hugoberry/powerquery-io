---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

A hónap végét adja vissza.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

A következőt tartalmazó hónap végét adja vissza: <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyből a hónap végének a számítása történik.</li>      </ul>


## Examples

### Example #1 
A 2011. 05. 14. által jelölt hónap végének megállapítása
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
A 2011. 05. 17., 17:00:00 -7:00 által jelölt hónap végének megállapítása
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
