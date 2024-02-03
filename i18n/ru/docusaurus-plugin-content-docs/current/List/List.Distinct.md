---
title: List.Distinct
---

# List.Distinct


## Description

Возвращает список значений с удаленными повторениями.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Возвращает список, содержащий все значения в списке <code>list</code> с удаленными повторениями. Если этот список пуст, то результатом является пустой список.


## Examples

### Example #1 
Удалить повторяющиеся элементы из списка \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
