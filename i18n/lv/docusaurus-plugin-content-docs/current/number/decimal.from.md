---
title: Decimal.From
---

# Decimal.From


Izveido decimāldaļskaitli no dotās vērtības.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Atgriež decimālo `number` vērtību no dotā `value`. Ja dotais `value` ir `null`, `Decimal.From` atgriež `null`. Ja dotais `value` ir `number` decimāldaļskaitļa diapazonā, tiek atgriezts `value`, bet pretējā gadījumā tiek atgriezta kļūda. Ja `value` ir jebkura cita tipa, tas vispirms tiks konvertēts par `number` using `Number.FromText`. Ir iespējams nodrošināt arī papildu `culture` (piemēram, “lv-LV”).


## Examples

### Example #1
Iegūt `"4.5"` decimāldaļskaitļa `number` vērtību.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
