---
title: List.Positions
---

# List.Positions


Повертає список зсувів для вхідного списку.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Повертає список зсувів для вказаного вхідного списку.

-   `list`: вхідний список.

Список позицій забезпечує доступ до позицій, коли список змінюється за допомогою функції `List.Transform`.


## Examples

### Example #1
Знайти зсуви значень у списку \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Створи таблицю, яка призначає ідентифікатор кожному клієнту залежно від його позиції в списку.
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
