---
title: Number.Combinations
---

# Number.Combinations


## Description

Возвращает определенное количество уникальных сочетаний.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Возвращает определенное количество уникальных сочетаний из элементов списка <code>setSize</code> с указанным размером сочетания <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Количество элементов в списке.</li>    <li><code>combinationSize</code>: Количество элементов в каждом сочетании.</li></ul>


## Examples

### Example #1 
Найти количество сочетаний из 5 элементов по 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
