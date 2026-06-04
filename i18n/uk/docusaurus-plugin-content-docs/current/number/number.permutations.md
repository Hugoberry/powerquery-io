---
title: Number.Permutations
---

# Number.Permutations


Повертає кількість перестановок.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Повертає кількість перестановок, які можна отримати зі списку елементів, `setSize`, зі вказаним розміром перестановки, `permutationSize`.


## Examples

### Example #1
Знайти кількість перестановок із 5 елементів у групах по 3 елементи.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
