---
title: List.Positions
---

# List.Positions


Возвращает список смещений для ввода.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Возвращает список смещений для указанного списка ввода

-   `list`: Список ввода.

Если для изменения списка используется `List.Transform`, список позиций может служить для предоставления преобразованию доступа к позиции.


## Examples

### Example #1
Найти смещения значений в списке \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Создайте таблицу, которая присваивает идентификатор каждому клиенту в зависимости от его положения в списке.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
