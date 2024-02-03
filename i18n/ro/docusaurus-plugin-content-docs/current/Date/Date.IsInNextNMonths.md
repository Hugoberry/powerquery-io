---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Indică dacă această dată cade în următorul număr de luni, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul următorului număr de luni, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      <li><code>months</code>: Numărul de luni.</li>      </ul>


## Examples

### Example #1 
Determină dacă luna ulterioară celei indicate de ora curentă a sistemului cade în următoarele două luni.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
