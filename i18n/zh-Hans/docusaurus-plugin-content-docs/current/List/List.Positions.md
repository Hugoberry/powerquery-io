---
title: List.Positions
---

# List.Positions


返回输入的偏移量列表。


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

返回指定输入列表的偏移量列表。

-   `list`: 输入列表。

使用 `List.Transform` 更改列表时，可以使用位置列表来授予对位置的转换权限。


## Examples

### Example #1
查找列表 \{1, 2, 3, 4, null, 5\} 中值的偏移量。
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
创建一个表，根据客户在列表中的位置为每个客户分配 ID。
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
