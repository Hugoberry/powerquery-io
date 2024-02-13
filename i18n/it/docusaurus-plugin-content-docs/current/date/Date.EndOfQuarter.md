---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Restituisce la fine del trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Restituisce la fine del trimestre contenente <code>dateTime</code>. Le informazioni sul fuso orario vengono mantenute.      <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da cui viene calcolata la fine del trimestre.</li>      </ul>


## Examples

### Example #1 
Trovare la fine del trimestre per il 10 ottobre 2011, 8.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
