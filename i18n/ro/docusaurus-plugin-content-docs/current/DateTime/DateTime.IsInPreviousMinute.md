---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


## Description

Indică dacă această valoare datetime cade în minutul anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în minutul curent.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul minutului anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în minutul curent.      <ul>      <li><code>dateTime</code>: o valoare <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinați dacă minutul anterior celui indicat de ora curentă a sistemului este în minutul anterior.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
