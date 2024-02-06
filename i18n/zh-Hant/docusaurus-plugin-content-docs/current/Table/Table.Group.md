---
title: Table.Group
---

# Table.Group


將資料表中具有相同索引鍵的資料列組成群組。


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

依 <code>key</code> 定義的索引鍵資料行，將 <code>table</code> 的資料列分組。<code>key</code> 可以是單一資料行名稱或資料行名稱的清單。    針對每個群組，系統會建立內含索引鍵資料行 (及其值) 的記錄，以及 <code>aggregatedColumns</code> 指定的任何匯總資料行。    也可指定 <code>groupKind</code> 和 <code>comparer</code>。<br />    <br />    若資料已經依索引鍵資料行排序，則可以提供 GroupKind.Local 的 <code>groupKind</code>。在某些情況下，這可能會改善分組的效能，    因為具有指定機碼值集合的所有資料列都假設為連續的。<br />    <br />    傳遞 <code>comparer</code> 時，請注意，如果它將不同的機碼視為相等，則資料列可能會被置於與其自身機碼不同的群組中。<br />    <br />    這個函式並不能保證它所傳回的資料列排序。  


## Examples

### Example #1 
將資料表分組，新增包含價格總和 (&#34;each List.Sum([price])&#34;) 的彙總資料行 [total]。
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
