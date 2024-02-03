---
title: Number.Combinations
---

# Number.Combinations


## Description

Vraća broj jedinstvenih kombinacija.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Vraća broj jedinstvenih kombinacija sa liste stavki, <code>setSize</code> sa navedenom veličinom kombinacije, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Broj stavki na listi.</li>    <li><code>combinationSize</code>: Broj stavki u svakoj kombinaciji.</li></ul>


## Examples

### Example #1 
Pronalaženje broja kombinacija od ukupno 5 stavki kada svaka kombinacija predstavlja grupu od 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
