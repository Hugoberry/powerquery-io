---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


## Description

Nurodo, ar ši data patenka į ankstesnės dienos intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią dieną patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į ankstesnės dienos intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią dieną patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      </ul>


## Examples

### Example #1 
Nustatykite, ar diena prieš dabartinį sistemos laiką yra ankstesnė diena.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
