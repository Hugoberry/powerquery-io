---
title: Number.Combinations
---

# Number.Combinations


## Description

Returnează numărul combinaţiilor unice.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Returnează numărul combinaţiilor unice dintr-o listă de elemente, <code>setSize</code> cu dimensiunea specificată a combinaţiei <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Numărul de elemente din listă.</li>    <li><code>combinationSize</code>: Numărul de elemente din fiecare combinaţie.</li></ul>


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
