---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Indică dacă această dată apare în timpul trimestrului curent, după cum este determinat de data şi ora curente ale sistemului.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> apare în timpul trimestrului curent, după cum este determinat de data şi ora curente ale sistemului.      <ul>      <li><code>dateTime</code>: O valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinaţi dacă ora curentă a sistemului este în trimestrul curent.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
