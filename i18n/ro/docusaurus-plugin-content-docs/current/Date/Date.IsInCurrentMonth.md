---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Indică dacă această dată apare în timpul lunii curente, după cum este determinat de data şi ora curente ale sistemului.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> apare în timpul lunii curente, după cum este determinat de data şi ora curente ale sistemului.      <ul>      <li><code>dateTime</code>: O valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinaţi dacă ora curentă a sistemului este în luna curentă.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
