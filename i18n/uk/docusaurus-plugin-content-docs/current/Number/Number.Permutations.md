---
title: Number.Permutations
---

# Number.Permutations


## Description

Повертає кількість перестановок.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Повертає кількість перестановок, які можна отримати зі списку елементів, <code>setSize</code>, зі вказаним розміром перестановки, <code>permutationSize</code>.


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
