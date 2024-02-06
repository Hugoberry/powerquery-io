---
title: Table.FirstN
---

# Table.FirstN


傳回指定的前幾個資料列。


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

根據 <code>countOrCondition</code> 的值，傳回資料表 <code>table</code> 的第一個資料列:    <ul>    <li> 如果 <code>countOrCondition</code> 是數字，就會傳回該數目的資料列 (從頂端開始)。</li>    <li> 如果 <code>countOrCondition</code> 是條件，就會傳回符合該條件的資料列，直到資料列不符合條件為止。</li></ul>


## Examples

### Example #1 
找出資料表的前兩個資料列。
```powerquery
Table.FirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
找出資料表中 [a] &gt; 0 的前幾個資料列。
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
