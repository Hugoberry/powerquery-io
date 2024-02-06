---
title: Number.Permutations
---

# Number.Permutations


Возвращает число перестановок.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Возвращает число перестановок, которое можно создать из нескольких элементов <code>setSize</code>, с указанным размером перестановки <code>permutationSize</code>.


## Examples

### Example #1 
Найти число перестановок для 5 элементов по 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
