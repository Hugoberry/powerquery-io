---
title: Number.IsEven
---

# Number.IsEven


## Description

Nurodo, ar reikšmė yra daloma.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

Nurodo, ar reikšmė <code>number</code> yra daloma; jei daloma, pateikiama <code>true</code>, kitu atveju – <code>false</code>.


## Examples

### Example #1 
Patikrinkite, ar 625 yra lyginis skaičius.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Patikrinkite, ar 82 yra lyginis skaičius.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
