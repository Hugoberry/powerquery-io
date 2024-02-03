---
title: Number.Permutations
---

# Number.Permutations


## Description

Returnează numărul de permutări.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Returnează numărul de permutări care pot fi generate de la un număr de elemente, <code>setSize</code>, cu o dimensiune de permutare specificată, <code>permutationSize</code>.


## Examples

### Example #1 
Găsiţi numărul de permutări dintr-un număr total de 5 elemente în grupuri de 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
