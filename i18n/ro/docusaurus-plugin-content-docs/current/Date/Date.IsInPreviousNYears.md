---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Indică dacă această dată cade în timpul numărului de ani anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți faptul că această funcție va returna false atunci când primește o valoare care cade în anul curent.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul numărului de ani anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în anul curent.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      <li><code>years</code>: Numărul de ani.</li>      </ul>


## Examples

### Example #1 
Determină dacă anul anterior celui indicat de ora curentă a sistemului cade în precedenții doi ani.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
