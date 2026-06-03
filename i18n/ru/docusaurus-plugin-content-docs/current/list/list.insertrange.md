---
title: List.InsertRange
---

# List.InsertRange


Вставляет значения в список по указанному индексу.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Возвращает новый список, созданный путем вставки значений из `values` в `list` с `index`. Первая позиция в списке находится по индексу 0.

-   `list`: целевой список, в который будут вставлены значения.
-   `index`: индекс целевого списка (`list`), в который будут вставлены значения. Первая позиция в списке находится по индексу 0.
-   `values`: список значений, которые будут вставлены в `list`.
.


## Examples

### Example #1
Вставка списка (\{3, 4\}) в целевой список (\{1, 2, 5\}) по индексу 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
Вставка списка с вложенным списком (\{1, \{1.1, 1.2\}\}) в целевой список (\{2, 3, 4\}) по индексу 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
