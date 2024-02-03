---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Nurodo, ar ši data patenka į kito mėnesio intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį mėnesį patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į kito mėnesio intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį mėnesį patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      </ul>


## Examples

### Example #1 
Nustatykite, ar mėnuo po dabartinio sistemos laiko yra tolesnis mėnuo.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
