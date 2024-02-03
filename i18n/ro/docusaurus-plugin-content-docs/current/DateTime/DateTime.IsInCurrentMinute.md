---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Indică dacă această valoare datetime apare în timpul minutului curent, după cum este determinat de data și ora curente ale sistemului.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> apare în timpul minutului curent, după cum este determinat de data și ora curente ale sistemului.      <ul>      <li><code>dateTime</code>: o valoare <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinați dacă ora curentă a sistemului este în minutul curent.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
