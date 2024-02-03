---
title: List.InsertRange
---

# List.InsertRange


## Description

Вставляє значення у список із заданим індексом.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Повертає новий список, створений шляхом вставлення значень зі списку <code>values</code> у список <code>list</code> з індексом <code>index</code>. Перша позиція у списку має індекс 0.      <ul>        <li><code>list</code>: Цільовий список, в який необхідно вставити значення.</li>        <li><code>index</code>: Індекс цільового списку(<code>list</code>), в який необхідно вставити значення. Перша позиція у списку має індекс 0.</li>        <li><code>values</code>: Список значень, які необхідно вставити у список <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Вставити список (\{3, 4}) у цільовий список (\{1, 2, 5}) з індексом 2.
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
Вставити список із вкладеним списком (\{1, \{1.1, 1.2}}) у цільовий список (\{2, 3, 4}) з індексом 0.
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
