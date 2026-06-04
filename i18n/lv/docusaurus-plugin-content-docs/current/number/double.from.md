---
title: Double.From
---

# Double.From


Izveido dubultprecizitātes skaitli no dotās vērtības.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Atgriež dubulto `number` vērtību no dotā `value`. Ja dotais `value` ir `null`, `Double.From` atgriež `null`. Ja dotais `value` ir `number` dubultā diapazonā, tiek atgriezts `value`, bet pretējā gadījumā tiek atgriezta kļūda. Ja `value` ir jebkura cita tipa, tas vispirms tiks konvertēts par `number` using `Number.FromText`. Ir iespējams nodrošināt arī papildu `culture` (piemēram, “lv-LV”).


## Examples

### Example #1
Iegūt `"4"` dubultprecizitātes `number` vērtību.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
