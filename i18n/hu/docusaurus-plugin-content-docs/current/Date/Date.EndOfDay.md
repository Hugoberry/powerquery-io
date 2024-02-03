---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

A nap végét adja vissza.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

A következő által jelölt nap végét adja vissza: <code>dateTime</code>. A rendszer megőrzi az időzónával kapcsolatos adatokat.      <ul>        <li><code>dateTime</code>: Egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyből a nap végének a számítása történik.</li>      </ul>


## Examples

### Example #1 
A 2011. 05. 14., 17:00:00 által jelölt nap végének megállapítása
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
A 2011. 05. 17., 17:00:00 -7:00 által jelölt nap végének megállapítása
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
