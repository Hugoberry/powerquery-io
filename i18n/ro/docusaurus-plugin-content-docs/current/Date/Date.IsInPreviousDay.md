---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


## Description

Indică dacă această dată cade în timpul zilei anterioare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ziua curentă.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul zilei anterioare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ziua curentă.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinaţi dacă ziua anterioară orei curente a sistemului este în ziua anterioară.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
