---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Indică dacă această dată cade în timpul lunii anterioare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul lunii anterioare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinaţi dacă luna anterioară orei curente a sistemului este în luna anterioară.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
