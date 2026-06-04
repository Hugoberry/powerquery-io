---
title: Single.From
---

# Single.From


Izveido vienkāršās precizitātes skaitli no dotās vērtības.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Atgriež atsevišķo `number` vērtību no dotā `value`. Ja dotais `value` ir `null`, `Single.From` atgriež `null`. Ja dotais `value` ir `number` atsevišķa diapazonā, tiek atgriezts `value`, bet pretējā gadījumā tiek atgriezta kļūda. Ja `value` ir jebkura cita tipa, tas vispirms tiks konvertēts par `number` using `Number.FromText`. Ir iespējams nodrošināt arī papildu `culture` (piemēram, “lv-LV”).


## Examples

### Example #1
Iegūt `"1.5"` vienkāršās precizitātes `number` vērtību.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
