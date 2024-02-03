---
title: Number.Combinations
---

# Number.Combinations


## Description

Restituisce il numero di combinazioni univoche.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Restituisce il numero di combinazioni univoche da un elenco di elementi, <code>setSize</code>, con la dimensione di combinazione specificata <code>combinationSize</code>.<ul>    <li><code>setSize</code>: il numero degli elementi nell'elenco.</li>    <li><code>combinationSize</code>: il numero degli elementi in ogni combinazione.</li></ul>


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
