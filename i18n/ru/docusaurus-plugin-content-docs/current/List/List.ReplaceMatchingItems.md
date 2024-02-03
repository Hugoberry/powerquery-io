---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Применяет все замены вида \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Выполняет заданные замены в списке <code>list</code>. В операции замены <code>replacements</code> применяется список из пар значений, старого и нового.    Необязательное значение критерия уравнения <code>equationCriteria</code> можно указать для управления проверкой на равенство.


## Examples

### Example #1 
Создать список из \{1, 2, 3, 4, 5}, заменив значение 5 на -5, а значение 1 на -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
