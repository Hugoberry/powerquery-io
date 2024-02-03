---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


## Description

Nurodo, ar ši data patenka į kitos savaitės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią savaitę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į kitos savaitės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią savaitę patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      </ul>


## Examples

### Example #1 
Nustatykite, ar savaitė po dabartinio sistemos laiko yra tolesnė savaitė.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
