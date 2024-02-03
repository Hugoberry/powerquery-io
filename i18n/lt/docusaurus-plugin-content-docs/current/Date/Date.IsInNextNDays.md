---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Nurodo, ar ši data patenka į kitų kelių dienų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią dieną patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į kitų kelių dienų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią dieną patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      <li><code>days</code>: dienų skaičius.</li>      </ul>


## Examples

### Example #1 
Nustatyti, ar diena po dabartinio sistemos laiko patenka į tolesnes dvi dienas.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
