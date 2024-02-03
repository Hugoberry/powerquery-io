---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

保留初始位移，然後交替接受和略過後續資料列。


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

保留初始位移，然後交替接受和略過後續資料列。    <ul>       <li><code>table</code>: 輸入資料表。</li>       <li><code>offset</code>: 要在開始反覆運算之前保留的資料列數目。</li>       <li><code>skip</code>: 要在每次反覆運算中移除的資料列數目。</li>       <li><code>take</code>: 要在每次反覆運算中保留的資料列數目。</li>    </ul>    


## Examples

### Example #1 
根據資料表傳回一個從第一個資料列開始、略過 1 個值然後保留 1 個值的資料表。
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
