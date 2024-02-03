---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

針對提供的資料行執行資料表之間的聯結，並且在新的資料行中產生聯結結果。


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Details

根據 <code>key1</code> (代表 <code>table1</code>) 和 <code>key2</code> (代表 <code>table2</code>) 所選取之索引鍵資料行的值是否相等，聯結 <code>table1</code> 的資料列與 <code>table2</code> 的資料列。結果會輸入名為 <code>newColumnName</code> 的資料行。<br /><code>joinKind</code> (選擇性) 可指定要執行的聯結種類。若未指定 <code>joinKind</code>，預設會執行左方外部聯結。<br />可以選擇納入一組 <code>keyEqualityComparers</code> 以指定如何比較索引鍵資料行。此功能目前僅供內部使用。<br />  


## Examples

### Example #1 
使用單一索引鍵資料行聯結兩個數據表。
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
