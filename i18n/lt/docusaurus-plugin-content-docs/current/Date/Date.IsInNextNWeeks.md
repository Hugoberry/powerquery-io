---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Nurodo, ar ši data patenka į kitų kelių savaičių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią savaitę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į kitų kelių savaičių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią savaitę patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      <li><code>weeks</code>: savaičių skaičius.</li>      </ul>


## Examples

### Example #1 
Nustatyti, ar savaitė po dabartinio sistemos laiko patenka į tolesnes dvi savaites.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
