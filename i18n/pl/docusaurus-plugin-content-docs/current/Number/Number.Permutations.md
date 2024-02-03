---
title: Number.Permutations
---

# Number.Permutations


## Description

Zwraca liczbę permutacji.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Zwraca liczbę permutacji, które można wygenerować na podstawie określonej liczby elementów <code>setSize</code>, używając określonego rozmiaru permutacji <code>permutationSize</code>.


## Examples

### Example #1 
Znajdź liczbę permutacji z listy 5 elementów, gdy każda permutacja to grupa 3 elementów.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
