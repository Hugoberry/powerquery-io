---
title: List.Positions
---

# List.Positions


Zwraca listę przesunięć wartości wejściowej.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Zwraca listę przesunięć dla określonej listy wejściowej.

-   `list`: Lista wejściowa.

W przypadku używania funkcji `List.Transform` do zmiany listy lista pozycji może służyć do udzielania przekształceniom dostępu do pozycji.


## Examples

### Example #1
Znajdź przesunięcia wartości na liście \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Utwórz tabelę, która przypisuje identyfikator każdemu klientowi na podstawie pozycji klienta na liście.
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
