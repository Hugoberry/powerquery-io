---
title: Number.Combinations
---

# Number.Combinations


Zwraca liczbę unikatowych kombinacji.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Zwraca liczbę unikatowych kombinacji z listy elementów `setSize`, używając określonego rozmiaru kombinacji `combinationSize`.

-   `setSize`: Liczba elementów na liście.
-   `combinationSize`: Liczba elementów w każdej kombinacji.


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
