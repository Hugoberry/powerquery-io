---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

傳回已移除最後 N 個資料列的資料表。


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

傳回資料表，其中不包含資料表 <code>table</code> 的最後 <code>countOrCondition</code> 個資料列。        移除的資料列數目取決於選擇性參數 <code>countOrCondition</code>。    <ul>    <li> 如果省略了 <code>countOrCondition</code>，就只移除最後一個資料列。</li>    <li> 如果 <code>countOrCondition</code> 是數字，就移除該數目的資料列 (從底端開始)。</li>    <li> 如果 <code>countOrCondition</code> 是條件，就移除符合該條件的資料列，直到資料列不符合條件為止。</li>    </ul>


## Examples

### Example #1 
移除資料表的最後一個資料列。
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
移除資料表中 [CustomerID] &gt;2 的最後幾個資料列。
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
