---
title: Table.IsDistinct
---

# Table.IsDistinct


指出資料表是否只包含相異資料列 (沒有重複項目)。


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

指出 <code>table</code> 是否只包含相異資料列 (沒有重複項目)。如果資料列相異，則傳回 <code>true</code>，否則傳回 <code>false</code>。    選擇性參數 <code>comparisonCriteria</code> 可指定要測試是否有重複情況的資料表資料行。如果未指定 <code>comparisonCriteria</code>，則會測試所有資料行。


## Examples

### Example #1 
判斷資料表是否相異。
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
判斷資料表的資料行是否相異。
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
