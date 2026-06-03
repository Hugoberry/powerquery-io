---
title: Number.Combinations
---

# Number.Combinations


Restituisce il numero di combinazioni univoche.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Restituisce il numero di combinazioni univoche da un elenco di elementi, `setSize`, con la dimensione di combinazione specificata `combinationSize`.

-   `setSize`: il numero degli elementi nell'elenco.
-   `combinationSize`: il numero degli elementi in ogni combinazione.


## Examples

### Example #1
Trovare il numero di combinazioni da un totale di 5 elementi dove ogni combinazione è un gruppo di 3 elementi.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
