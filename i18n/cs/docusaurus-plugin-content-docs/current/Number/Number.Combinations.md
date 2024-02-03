---
title: Number.Combinations
---

# Number.Combinations


## Description

Vrátí počet jedinečných kombinací.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Vrátí počet jedinečných kombinací položek seznamu <code>setSize</code> se zadanou velikostí kombinace <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Počet položek v seznamu.</li>    <li><code>combinationSize</code>: Počet položek v každé kombinaci.</li></ul>


## Examples

### Example #1 
Zjistí počet kombinací celkového počtu pěti položek, pokud je každá kombinace skupina tří položek.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
