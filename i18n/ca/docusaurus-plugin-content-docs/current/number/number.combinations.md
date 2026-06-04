---
title: Number.Combinations
---

# Number.Combinations


Retorna el nombre de combinacions úniques.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Retorna el nombre de combinacions úniques a partir d'una llista d'elements, `setSize`, amb la mida de la combinació especificada, `combinationSize`.

-   `setSize`: el nombre d'elements de la llista.
-   `combinationSize`: el nombre d'elements de cada combinació.


## Examples

### Example #1
Troba el nombre de combinacions d'un total de 5 elements quan cada combinació és un grup de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
