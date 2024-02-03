---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Restituisce la fine del giorno.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Restituisce la fine del giorno rappresentata da <code>dateTime</code>. Le informazioni sul fuso orario vengono mantenute.      <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da cui viene calcolata la fine del giorno.</li>      </ul>


## Examples

### Example #1 
Ottenere la fine del giorno per 14/5/2011 17.00.00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Ottenere la fine del giorno per 17/5/2011 17.00.00 -7.00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
