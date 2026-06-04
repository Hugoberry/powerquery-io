---
title: Number.IsEven
---

# Number.IsEven


Nurodo, ar reikšmė yra daloma.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Nurodo, ar reikšmė `number` yra daloma; jei daloma, pateikiama `true`, kitu atveju – `false`.


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
