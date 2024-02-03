---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Nurodo, ar ši data patenka į ankstesnių kelerių metų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šiuos metus patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į ankstesnių kelerių metų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šiuos metus patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      <li><code>years</code>: metų skaičius.</li>      </ul>


## Examples

### Example #1 
Nustatyti, ar metai prieš dabartinį sistemos laiką patenka į ankstesnius dvejus metus.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
