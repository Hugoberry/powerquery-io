---
title: Number.Combinations
---

# Number.Combinations


## Description

Zwraca liczbę unikatowych kombinacji.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Zwraca liczbę unikatowych kombinacji z listy elementów <code>setSize</code>, używając określonego rozmiaru kombinacji <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Liczba elementów na liście.</li>    <li><code>combinationSize</code>: Liczba elementów w każdej kombinacji.</li></ul>


## Examples

### Example #1 
Znajdź liczbę kombinacji z listy 5 elementów, gdy każda kombinacja to grupa 3 elementów.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
