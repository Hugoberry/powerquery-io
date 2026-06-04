---
title: List.Positions
---

# List.Positions


Енгізбе үшін ауытқулардың тізімін қайтарады.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Белгіленген кіріс тізімі үшін ауытқулар тізімін қайтарады.

-   `list`: Кіріс тізімі.

Тізімді өзгерту үшін `List.Transform` кодын пайдаланғанда, орындардың тізімін пайдаланып орынға түрлендіру рұқсатын беруге болады.


## Examples

### Example #1
\{1, 2, 3, 4, null, 5\} тізіміндегі мәндердің ауытқуларын анықтау.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Әрбір тұтынушыға тізімдегі тұтынушының орнына сәйкес идентификатор тағайындайтын кесте жасаңыз.
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
