---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Rodoma, ar ši data sutampa su dabartine diena – naudojama sistemoje nustatyta dabartinė data ir laikas.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Rodoma, ar pateikta datos ir laiko reikšmė <code>dateTime</code> sutampa su dabartine diena – naudojama sistemoje nustatyta dabartinė data ir laikas.      <ul>      <li><code>dateTime</code>: turi būti įvertinta <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.</li>      </ul>


## Examples

### Example #1 
Nustatykite, ar dabartinis sistemos laikas rodo dabartinę dieną.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
