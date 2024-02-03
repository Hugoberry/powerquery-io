---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Restituisce la fine dell’anno.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Restituisce la fine dell'anno contenente <code>dateTime</code>, inclusi i secondi frazionari. Le informazioni del fuso orario sono mantenute.      <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da cui viene calcolata la fine dell'anno.</li>      </ul>


## Examples

### Example #1 
Ottenere la fine dell&#39;anno per 14/5/2011 17.00.00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Ottenere la fine dell&#39;ora per 17/5/2011 17.00.00 -7.00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
