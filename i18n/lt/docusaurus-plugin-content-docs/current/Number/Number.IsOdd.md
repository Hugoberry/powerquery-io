---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Nurodoma, ar reikšmė yra nelyginė.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Nurodoma, ar reikšmė yra nelyginė. Pateikiama <code>true</code>, jei <code>number</code> yra nelyginis skaičius; kitu atveju pateikiama <code>false</code>.


## Examples

### Example #1 
Patikrinkite, ar 625 yra nelyginis skaičius.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Patikrinkite, ar 82 yra nelyginis skaičius.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
