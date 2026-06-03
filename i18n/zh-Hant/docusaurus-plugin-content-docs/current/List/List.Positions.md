---
title: List.Positions
---

# List.Positions


傳回輸入的位移清單。


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

傳回指定輸入清單的位移清單。

-   `list`: 輸入清單。

使用`List.Transform` 變更清單時，可以使用位置清單讓轉換能夠存取位置。


## Examples

### Example #1
找出清單 \{1, 2, 3, 4, null, 5\} 中值的位移。
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
建立資料表，根據客戶在清單中的順序為每位客戶指派識別碼。
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
