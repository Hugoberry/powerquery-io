---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Nurodo, ar ši data patenka į ankstesnių kelių mėnesių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį mėnesį patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į ankstesnių kelių mėnesių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį mėnesį patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      <li><code>months</code>: mėnesių skaičius.</li>      </ul>


## Examples

### Example #1 
Nustatyti, ar mėnuo prieš dabartinį sistemos laiką patenka į du ankstesnius mėnesius.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
