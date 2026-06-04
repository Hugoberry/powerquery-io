---
title: Number.Combinations
---

# Number.Combinations


Returnează numărul combinaţiilor unice.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Returnează numărul combinaţiilor unice dintr-o listă de elemente, `setSize` cu dimensiunea specificată a combinaţiei `combinationSize`.

-   `setSize`: Numărul de elemente din listă.
-   `combinationSize`: Numărul de elemente din fiecare combinaţie.


## Examples

### Example #1
Găsiţi numărul de combinaţii dintr-un număr total de 5 elemente când fiecare combinaţie este un grup de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
