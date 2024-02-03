---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

对提供的列执行两个表之间的联接，并在新列中生成联接结果。


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

根据由 <code>key1</code> (针对 <code>table1</code>)和 <code>key2</code> (针对 <code>table2</code>)选择的键列的值是否相等，联接 <code>table1</code> 的行与 <code>table2</code> 的行。将结果输入到名为 <code>newColumnName</code> 的列。此函数的行为类似于具有 JoinKind 的 LeftOuter 的 Table.Join，除了联接结果以嵌套而非平展方式存在之外。


## Examples

### Example #1 
从已联接 [saleID] 的表(\{[saleID = 1, price = 20], [saleID = 2, price = 10]})将名为 &#34;price/stock&#34; 的联接列添加到(\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]})。
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
