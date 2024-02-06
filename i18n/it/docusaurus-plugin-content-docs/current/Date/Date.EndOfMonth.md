---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Restituisce la fine del mese.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Restituisce la fine del mese contenente <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da cui viene calcolata la fine del mese.</li>      </ul>


## Examples

### Example #1 
Ottenere la fine del mese per 14/5/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Ottenere la fine del mese per 17/5/2011 05.00.00 -7.00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
