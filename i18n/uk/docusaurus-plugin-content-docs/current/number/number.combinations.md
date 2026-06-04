---
title: Number.Combinations
---

# Number.Combinations


Повертає кількість унікальних комбінацій.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Повертає кількість унікальних комбінацій зі списку елементів, `setSize` із заданим розміром комбінації, `combinationSize`.

-   `setSize`: Кількість елементів у списку.
-   `combinationSize`: Кількість елементів у кожній комбінації.


## Examples

### Example #1
Знайти кількість комбінацій із 5 елементів, якщо кожна комбінація становить групу з 3 елементів.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
