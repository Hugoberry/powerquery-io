---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Rodoma, ar ši data patenka į dabartinius metus, sutampa su dabartine diena, ar yra ankstesnė – naudojama sistemoje nustatyta dabartinė data ir laikas.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Rodoma, ar pateikta datos ir laiko reikšmė <code>dateTime</code> patenka į dabartinius metus, sutampa su dabartine diena, ar yra ankstesnė – naudojama sistemoje nustatyta dabartinė data ir laikas.      <ul>      <li><code>dateTime</code>: turi būti įvertinta <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.</li>      </ul>


## Examples

### Example #1 
Nustatykite, ar dabartinis sistemos laikas patenka į metus iki dabartinės datos.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
