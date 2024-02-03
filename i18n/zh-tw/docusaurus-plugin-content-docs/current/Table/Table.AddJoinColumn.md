---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

針對提供的資料行執行資料表之間的聯結，並且在新的資料行中產生聯結結果。


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Details

根據 <code>key1</code> (代表 <code>table1</code>) 和 <code>key2</code> (代表 <code>table2</code>) 所選取之索引鍵資料行的值是否相等，聯結 <code>table1</code> 的資料列與 <code>table2</code> 的資料列。結果會輸入名為 <code>newColumnName</code> 的資料行中。這個函數的行為與 JoinKind 為 LeftOuter 的 Table.Join 很相似，不同之處在於，聯結結果是以巢狀而非以壓平合併方式呈現。


## Examples

### Example #1 
將聯結資料行加入至針對 [saleID] 聯結之資料表 (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) 中名為 &#34;price/stock&#34; 的 (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]})。
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
