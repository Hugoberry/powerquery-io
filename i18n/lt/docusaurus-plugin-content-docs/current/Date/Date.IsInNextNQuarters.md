---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Nurodo, ar ši data patenka į kitų kelių ketvirčių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį ketvirtį patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į kitų kelių ketvirčių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį ketvirtį patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos</code>, <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      <li><code>quarters</code>: ketvirčių skaičius.</li>      </ul>


## Examples

### Example #1 
Nustatyti, ar ketvirtis po dabartinio sistemos laiko patenka į du tolesnius ketvirčius.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
