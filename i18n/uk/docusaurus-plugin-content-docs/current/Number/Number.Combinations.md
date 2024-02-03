---
title: Number.Combinations
---

# Number.Combinations


## Description

Повертає кількість унікальних комбінацій.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Повертає кількість унікальних комбінацій зі списку елементів, <code>setSize</code> із заданим розміром комбінації, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Кількість елементів у списку.</li>    <li><code>combinationSize</code>: Кількість елементів у кожній комбінації.</li></ul>


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
