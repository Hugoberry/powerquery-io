---
title: Number.Permutations
---

# Number.Permutations


Palauttaa permutaatioiden määrän.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Palauttaa niiden permutaatioiden määrän, jotka voidaan luoda kohteiden määrästä `setSize` käyttäen määritettyä permutaatiokokoa `permutationSize`.


## Examples

### Example #1
Selvitä permutaatioiden määrä yhteensä viidestä kohteesta kolmen ryhmissä.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
