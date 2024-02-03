---
title: Number.Permutations
---

# Number.Permutations


## Description

Palauttaa permutaatioiden määrän.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Palauttaa niiden permutaatioiden määrän, jotka voidaan luoda kohteiden määrästä <code>setSize</code> käyttäen määritettyä permutaatiokokoa <code>permutationSize</code>.


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
