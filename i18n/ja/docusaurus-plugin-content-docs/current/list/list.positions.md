---
title: List.Positions
---

# List.Positions


入力のオフセットのリストを返します。


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

指定した入力リストのオフセットの一覧を返します。

-   `list`: 入力リスト。

`List.Transform` を使用してリストを変更する場合は、位置のリストを使用して、位置への変換アクセス権を付与できます。


## Examples

### Example #1
リスト \{1, 2, 3, 4, null, 5\} 内の値のオフセットを求めます。
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
リスト内の顧客の位置に基づいて各顧客に ID を割り当てるテーブルを作成します。
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
