---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

Indică dacă această dată cade în timpul săptămânii anterioare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în săptămâna curentă.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul săptămânii anterioare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în săptămâna curentă.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinaţi dacă săptămâna anterioară orei curente a sistemului este în săptămâna anterioară.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
