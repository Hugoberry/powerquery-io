---
title: Number.IsOdd
---

# Number.IsOdd


Nurodoma, ar reikšmė yra nelyginė.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Nurodoma, ar reikšmė yra nelyginė. Pateikiama `true`, jei `number` yra nelyginis skaičius; kitu atveju pateikiama `false`.


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
