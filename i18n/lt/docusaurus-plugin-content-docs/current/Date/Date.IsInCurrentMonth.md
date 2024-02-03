---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Rodoma, ar ši data patenka į dabartinį mėnesį – naudojama sistemoje nustatyta dabartinė data ir laikas.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Rodoma, ar pateikta datos ir laiko reikšmė <code>dateTime</code> patenka į dabartinį mėnesį – naudojama sistemoje nustatyta dabartinė data ir laikas.      <ul>      <li><code>dateTime</code>: turi būti įvertinta <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.</li>      </ul>


## Examples

### Example #1 
Nustatykite, ar dabartinis sistemos laikas rodo dabartinį mėnesį.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
