---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Indică dacă această dată cade în următorul număr de ani, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în anul curent.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul următorului număr de ani, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în anul curent.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      <li><code>years</code>: Numărul de ani.</li>      </ul>


## Examples

### Example #1 
Determină dacă anul ulterior celui indicat de ora curentă a sistemului cade în următorii doi ani.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
