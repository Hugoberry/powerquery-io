---
title: Percentage.From
---

# Percentage.From


Pateikiama nurodytos reikšmės procentinė reikšmė.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Pateikiama `percentage` reikšmė iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Percentage.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `text` su po jos pateikiamu procento simboliu, bus pateiktas konvertuotas dešimtainis skaičius. Kitu atveju reikšmė bus konvertuota į `number` reikšmę naudojant `Number.From`. Taip pat gali būti pateiktas pasirenkamas `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite `12.3%``percentage` reikšmę.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
