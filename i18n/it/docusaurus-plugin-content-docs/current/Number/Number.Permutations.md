---
title: Number.Permutations
---

# Number.Permutations


## Description

Restituisce il numero di permutazioni.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Restituisce il numero di permutazioni che possono essere generate da un numero di elementi, <code>setSize</code>, con una dimensione di permutazione specificata, <code>permutationSize</code>.


## Examples

### Example #1 
Trovare il numero di permutazioni da un totale 5 elementi in gruppi di 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
