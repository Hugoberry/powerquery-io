---
title: Table.LastN
---

# Table.LastN


傳回指定數目的最後幾個資料列。


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

根據 <code>countOrCondition</code> 的值，傳回資料表 <code>table</code> 的最後一個資料列:    <ul>    <li> 如果 <code>countOrCondition</code> 是數字，就會傳回該數目的資料列，從位置 (結尾 - <code>countOrCondition</code>) 開始。</li>    <li> 如果 <code>countOrCondition</code> 是條件，就會按遞增位置傳回符合該條件的資料列，直到資料列不符合條件為止。</li></ul>


## Examples

### Example #1 
找出資料表的最後兩個資料列。
```powerquery
Table.LastN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
找出資料表中 [a] &gt; 0 的最後幾個資料列。
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
