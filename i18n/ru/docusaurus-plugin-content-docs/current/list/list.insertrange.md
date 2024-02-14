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

Возвращает новый список, созданный путем вставки значений из <code>values</code> в <code>list</code> с <code>index</code>. Первая позиция в списке находится по индексу 0.      <ul>        <li><code>list</code>: целевой список, в который будут вставлены значения.</li>        <li><code>index</code>: индекс целевого списка (<code>list</code>), в который будут вставлены значения. Первая позиция в списке находится по индексу 0.</li>        <li><code>values</code>: список значений, которые будут вставлены в <code>list</code>.      </li></ul>


## Examples

### Example #1 
Вставка списка (\{3, 4}) в целевой список (\{1, 2, 5}) по индексу 2.
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
Вставка списка с вложенным списком (\{1, \{1.1, 1.2}}) в целевой список (\{2, 3, 4}) по индексу 0.
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
