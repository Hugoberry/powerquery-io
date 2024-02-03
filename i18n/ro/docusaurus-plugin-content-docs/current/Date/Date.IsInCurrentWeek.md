---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Indică dacă această dată apare în timpul săptămânii curente, după cum este determinat de data şi ora curente ale sistemului.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> apare în timpul săptămânii curente, după cum este determinat de data şi ora curente ale sistemului.      <ul>      <li><code>dateTime</code>: O valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinaţi dacă ora curentă a sistemului este în săptămâna curentă.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
